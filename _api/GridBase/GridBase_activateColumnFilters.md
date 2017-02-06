---
layout: apipost
title: activateColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/activateColumnFilters/
tags:
  - filter
---


#### Description

 [DataColumn](/api/types/DataColumn)에 등록된 [ColumnFilter](/api/types/ColumnFilter)들 중, filterNames 배열에 포함된 필터명을 갖는 filter들을 적용시키거나 해제한다.

#### Syntax

> function activateColumnFilters(column, filterNames, active)

#### Parameters

> **column**  
> Type: String\|Object  
> fieldName 또는 [DataColumn](/api/types/DataColumn/) Object  

> **filterNames**  
> Type: Array of String[] \| String  
> 필터 이름 배열이나 필드명 문자열.  

> **active**  
> Type: Boolean  
> true를 입력하면 입력된 column의 filter를 모두 적용시킨다. false면 해제시킨다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var aColumn = gridView.columnByField("content");
gridView.activateColumnFilters(aColumn, ["filter1", "filter2", "filter3"], true);
....
gridView.activateColumnFilters("col1", "filter1", false);
</pre>

---

#### API Links

* [activateAllColumnFilters](/api/GridBase/activateAllColumnFilters)
* [setColumnFilters](/api/GridBase/setColumnFilters)
* [clearColumnFilters](/api/GridBase/setColumnFilters)  

#### Demo Links

* [Filtering Demo](http://demo.realgrid.com/Columns/ColumnFiltering/)