---
layout: apipost
title: setColumns
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumns/
tags:
  - column
  - columnProperties
  - 컬럼구성
---


#### Description

> 기존에 설정되어 있는 컬럼들을 모두 제거하고 새로운 컬럼들로 그리드를 재구성한다.

#### Syntax

> function setColumns(columns)

#### Parameters

> **columns**  
> Type: Array of Object  
> 컬럼 설정 정보 배열  
> 배열의 각 항목은 [DataColumn](/api/types/DataColumn/) 또는 [ColumnGroup](/api/types/ColumnGroup)과 같은 내용으로 구성되는 object다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var columns = [{
        name: "column1",
        }, {
        name: "column2",
        }];
    gridView.setColumns(columns);
</pre>

#### See Also
> [ColumnGrouping](http://demo.realgrid.com/Demo/ColumnGrouping), [getColumns](/api/GridBase/getColumns)