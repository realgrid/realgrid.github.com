---
layout: apipost
title: clearColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearColumnFilters/
---


#### Description

> 입력된 [DataColumn\|DataColumn](/api/GridBase/)에 등록된 [Columnfilter\|Columnfilter](/api/GridBase/)들을 모두 제거한다.

#### Syntax

> function clearColumnFilters(column)

#### Parameters

> **column**
> Type: String\|object
> ColumnName 또는 [DataColumn\|DataColumn](/api/GridBase/) Object

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grdMain.clearColumnFilters("content");
</pre>

