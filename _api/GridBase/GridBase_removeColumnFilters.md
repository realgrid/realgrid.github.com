---
layout: apipost
title: removeColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/removeColumnFilters/
tags:
  - filter
  - columnFilter
  - 필터
---


#### Description

 그리드 컬럼에 설정되어있는 fllter중 filterNames에 포함된 filter를 제거한다.

#### Syntax

> function removeColumnFilters(column, filterNames);

#### Parameters

> **column**  
> Type: String\|Object  
> columnName 또는 [column](/api/types/DataColumn/)객체  

> **filterNames**  
> Type: Array of String  
> 필터명의 배열이다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var aColumn = grdMain.columnByField("title");
var filters = [{name:"filter1",criteria:"value='1'"},{name:"filter2",criteria:"value='2'"}];
gridView.setColumnFilters(aColumn,filters);
...
gridView.removeColumnFilters(aColumn,["filter1"]);
</pre>

---

#### API Links

* [setColumnFilters](/api/GridBase/setColumnFilters)

#### Demo Links

* [FilteringDemo](http://demo.realgrid.com/Columns/ColumnFiltering/)