---
layout: apipost
title: activateColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/activateColumnFilters/
---


#### Description

> [DataColumn\|DataColumn](/api/GridBase/)에 등록된 [ColumnFilter](/api/GridBase/)들 중, filterNames 배열에 포함된 필터명을 갖는 filter들을 적용시키거나 해제한다.

#### Syntax

> function activateColumnFilters(column, filterNames, active)

#### Parameters

> **column**
> Type: String\|Object
> fieldName 또는 [DataColumn\|DataColumn](/api/GridBase/) Object

> **filterNames**
> Type: Array of String[] \| String
> 필터 이름 배열이나 필드명 문자열.

> **active**
> Type: Boolean
> true를 입력하면 입력된 column의 filter를 모두 적용시킨다. false면 해제시킨다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var aColumn = grdMain.columnByField("content");
    grdMain.activateColumnFilters(aColumn, ["filter1", "filter2", "filter3"], true);
    ....
    grdMain.activateColumnFilters("col1", "filter1", false);
</pre>

