---
layout: apipost
title: setJsonRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setJsonRows/
tags:
  - Json데이터
  - Json배열 데이터행 추가
  - onRowCountChanged
  - rowsProp
---


#### Description

> 기존 데이터행들을 모두 삭제하고 지정한 Json 배열을 데이터행들로 추가한다. 개별 추가 이벤트는 발생하지 않고 [onRowCountChanged](/api/LocalDataProvider/onRowCountChanged) 콜백만 호출된다.

#### Syntax

> function setJsonRows(source, rowsProp, start, count)

#### Parameters

> **source**
> Type: Array \| object.  
> Json 배열이거나 Json 배열을 속성으로 갖는 object. Json 배열이 아닌 경우 rowsProp에 지정된 속성을 배열로 지정해야 한다.

> **rowsProp**  
> Type: String  
> source가 배열이 아닌 경우 행으로 추가할 배열에 해당하는 속성의 이름.

> **start**  
> Type: Number  
> Default: 0  
> 가져올 Json 시작행. 

> **count**  
> Type: Number  
> Default: -1  
> 가져올 Json 행의 개수. -1일 경우 모든 행을 가져온다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var source = {
        rows: [
          {}, {}, ...
        ]
    };
    dataProvider.setJsonRows(source, "rows");
</pre>

