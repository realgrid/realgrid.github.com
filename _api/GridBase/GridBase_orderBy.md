---
layout: apipost
title: orderBy
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/orderBy/
tags:
  - 정렬
  - sort
---


#### Description

> 하나 이상의 데이터 필드를 기준으로 [Grid Item](/api/features/Grid Item/)들을 정렬한다.  
> 정렬은 Item Model 수준에서 실행되고, [Data Provider](/api/features/Data Provider/) 행들의 실제 위치는 변경되지 않는다.  

#### Syntax

> function orderBy(fieldNames, sortDirs)

#### Parameters

> **fieldNames**  
> Type: Array of String  
> 정렬할 필드 이름 목록  

> **sortDirs**  
> Type: Array of [SortDirection](/api/types/SortDirection/)      
> 각 필드에 대한 정렬 방식 목록     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    var fields = ["field1", "field2"];
    var dirs = [RealGrids.SortDirection.ASCENDING, RealGrids.SortDirection.DESCENDING];
    gridView.orderBy(fields, dirs);

    // 정렬을 해제하는 경우
    gridView.orderBy([],[]);
</pre>

#### Demo Links
#### See Also

#### See Also
> [SortingOptions](/api/types/SortingOptions)