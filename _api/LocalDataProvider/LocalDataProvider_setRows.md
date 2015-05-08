---
layout: apipost
title: setRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setRows/
---


#### Description

> 기존 데이터행들을 모두 삭제하고 매개변수로 넘어온 행들을 추가한다. 개별 행 추가 이벤트는 발생하지 않고 [onRowCountChanged](/api/LocalDataProvider/onRowCountChanged/) 콜백만 호출된다.

#### Syntax

> function setRows(rows, start, count)

#### Parameters

> **rows**  
> Type: Array or Array \| Object  
> 입력하려는 데이터행들의 배열이다.  

> **start**  
> Type: Number  
> Default: 0  
> rows의 시작 index를 입력한다. 

> **count**  
> Type: Number  
> Default: -1 (start이후의 데이터를 입력)  
> 추가할 행의 건수를 입력한다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    rows = [{"no":1,"title":"title1","content":"content1"},
            {"no":2,"title":"title2","content":"content2"},
            {"no":3,"title":"title3","content":"content3"},
            {"no":4,"title":"title4","content":"content4"},
            {"no":5,"title":"title5","content":"content5"}];

    dataProvider.setRows(rows, 1,3);  // rows 배열의 2번째부터 4번째까지 3건을 입력한다.
</pre>

