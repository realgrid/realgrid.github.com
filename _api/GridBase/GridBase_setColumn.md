---
layout: apipost
title: setColumn
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumn/
tags:
  - 컬럼속성
  - column
  - 컬럼설정
---


#### Description

 그리드에 설정되어 있는 컬럼의 정보를 변경한다.  
 이 메쏘드를 통해 컬럼 정보를 재설정하기 위해서는 먼저 [columnByName](/api/GridBase/columnByName/) 등으로 먼저 기존 설정 정보를 가져와야 한다.

#### Syntax

> function setColumn(column)

#### Parameters

> **column**  
> Type: Object  
> 컬럼 설정 정보  
> [DataColumn](/api/types/DataColumn/)와 같은 내용으로 구성되는 object다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var column = gridView.columnByName("col1");
column.editable = false
gridView.setColumn(column);
</pre>

---

#### API Links

* [setColumns](/api/GridBase/setColumns)

#### Demo Links

* [Column Properties](http://demo.realgrid.com/Columns/ColumnProperties/)
