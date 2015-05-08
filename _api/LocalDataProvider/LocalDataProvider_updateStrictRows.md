---
layout: apipost
title: updateStrictRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/updateStrictRows/
---


#### Description

> 지정한 위치 부터 기존 데이터행의 값을 수정한다.  
> undefined로 지정하거나 명시되지 않은 경우 기존의 값을 유지.

#### Syntax

> function updateStrictRows(row, rows, start, count, rowEvents)

#### Parameters

> **row**  
> Type: number  
> 수정을 시작할 데이터행

> **rows**  
> Type: Array of Array \| Object  
> 값들의 배열. 각 행의 값은 Array이나 object.

> **start**  
> Type: number  
> Default: 0  
> rows로 입력된 Array의 시작Index.

> **count**  
> Type: number  
> Default: -1 (rows.length만큼 수정)  
> 수정할 건수

> **rowEvents**  
> Type: Boolean  
> Default: false  
> true이면 [onRowStateChanged](/api/LocalDataProvider/onRowStateChanged/) event가 건별로 호출된다.  
> false이면 [onRowStatesChanged](/api/LocalDataProvider/onRowStatesChanged/) event가 한번만 호출된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    rows = [{title:"title"},{"title":"title2","content":undefined}];
    provider.updateStrictRows(0, rows, 0, 2);
</pre>
