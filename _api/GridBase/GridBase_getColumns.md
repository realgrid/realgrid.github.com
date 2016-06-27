
---
layout: apipost
title: getColumns
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumns/
tags:
  - column
  - columnProperties
  - 컬럼구성
---


#### Description

 기존에 설정되어 있는 컬럼들을 가져온.

#### Syntax

> function getColumns(columns)

#### Parameters

> None.

#### Return value

> Type: Array of Object  
> 컬럼 설정 정보 배열  
> 배열의 각 항목은 [DataColumn](/api/types/DataColumn/) 또는 [ColumnGroup](/api/types/ColumnGroup)과 같은 내용으로 구성되는 object다.  

#### Examples 

<pre class="prettyprint">
var columns = [{
    name: "column1",
    }, {
    name: "column2",
    }];
gridView.setColumns(columns);
////
....
////
gridVIew.getColumns();
</pre>

---

#### API Links

* [setColumns](/api/GridBase/getColumns)

#### Demo Links

* [ColumnGrouping](http://demo.realgrid.com/Demo/ColumnGrouping)