---
layout: apipost
title: activateAllColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/activateAllColumnFilters/
tags:
  - filter
  - 필터
  - activeFilter
---


#### Description

> [DataColumn](/api/types/DataColumn)에 등록된 [ColumnFilter](/api/types/ColumnFilter)들을 모두 적용시키거나 해제시킨다.  

#### Syntax

> <pre class="prettyprint">
> function activateAllColumnFilters(column, active)
> </pre>

#### Parameters

> **column**  
> Type: String\|Object  
> ColumnName, FieldName 또는 [DataColumn](/api/types/DataColumn) Object

> **active**  
> Type: Boolean  
> true를 입력하면 column의 filter들을 적용시키고, false면 모두 해제.  

#### Return value  

> None.

#### Examples 

<pre class="prettyprint">
    var aColumn = grdMain.columnByField("content");
    grdMain.activateAllColumnFilters(aColumn,true);
    ....
    grdMain.activateAllColumnFilters("content",false);
</pre>

#### Demo Links
> [activateColumnFilters](/api/GridBase/activateColumnFilters), [setColumnFilters](/api/GridBase/setColumnFilters), [clearColumnFilters](/api/GridBase/setColumnFilters)  
> [Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)