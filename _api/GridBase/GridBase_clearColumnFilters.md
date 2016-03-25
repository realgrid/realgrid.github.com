---
layout: apipost
title: clearColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearColumnFilters/
tags:
  - filter
  - clearFilter
---


#### Description

> 입력된 [DataColumn](/api/types/DataColumn/)에 등록된 [ColumnFilter](/api/types/ColumnFilter/)들을 모두 제거한다.  

#### Syntax

> function clearColumnFilters(column)  

#### Parameters

> **column**  
> Type: String\|object  
> ColumnName 또는 [DataColumn](/api/types/DataColumn/) Object  

#### Return value

> None.  

#### Example

<pre class="prettyprint">
    gridView.clearColumnFilters("content");
</pre>

