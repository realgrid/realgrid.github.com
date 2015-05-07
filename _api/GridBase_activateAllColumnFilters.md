---
layout: apipost
title: activateAllColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/activateAllColumnFilters/
---


#### Description

> [DataColumn\|DataColumn](/api/GridBase/)에 등록된 [ColumnFilter](/api/GridBase/)들을 모두 적용시키거나 해제시킨다.

#### Syntax

> function activateAllColumnFilters(column, active)

#### Parameters

> **column**
> Type: String\|Object
> ColumnName, FieldName 또는 [DataColumn\|DataColumn](/api/GridBase/) Object

> **active**
> Type: Boolean
> true를 입력하면 column의 filter들을 적용시키고, false면 모두 해제.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var aColumn = grdMain.columnByField("content");
    grdMain.activateAllColumnFilters(aColumn,true);
    ....
    grdMain.activateAllColumnFilters("content",false);
</pre>

