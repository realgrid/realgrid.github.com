---
layout: apipost
title: setXmlRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setXmlRows/
tags:
  - xml데이터행 추가
  - xml형식 데이터행 추가
  - rowsElement
---


#### Description

 기존 데이터행들을 모두 삭제하고 지정한 매개변수로 전달되는 XML을 데이터 행들로 추가한다.

#### Syntax

> function setXmlRows(rows, rowsElement, start, count)

#### Parameters

> **rows**  
> Type: String  
> XML 소스.

> **rowElement**  
> Type: String  
> XML 중 데이터행들로 사용될 element의 이름.

> **start**  
> Type: Number  
> Default: 0  
> 가져올 XML 시작행. 

> **count**  
> Type: Number  
> Default: -1 (모든 행)  
> 가져올 XML 행의 개수.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var source = {
    rows: [
      {}, {}, ...
    ]
};
dataProvider.setXmlRows(source, "rows");
</pre>

