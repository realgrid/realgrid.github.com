---
layout: apipost
title: activateAllColumnFilters
part: Objects
objectname: GridBase
directiontype: Method
---

h2. Description

> [[DataColumn|DataColumn]]에 등록된 [[ColumnFilter]]들을 모두 적용시키거나 해제시킨다.

h2. Syntax

> function activateAllColumnFilters(column, active)

h2. Parameters

> *column*a 
 Type: String|Object
 ColumnName, FieldName 또는 [[DataColumn|DataColumn]] Object

> *active*
> Type: Boolean
> true를 입력하면 column의 filter들을 적용시키고, false면 모두 해제.

h2. Return value

> None.

h2. Example

<pre type="code">
    var aColumn = grdMain.columnByField("content");
    grdMain.activateAllColumnFilters(aColumn,true);
    ....
    grdMain.activateAllColumnFilters("content",false);
</pre>
