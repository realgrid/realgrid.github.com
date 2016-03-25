---
layout: apipost
title: getActiveColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getActiveColumnFilters/
tags:
  - filter
  - columnFilter
---


#### Description

> 입력된 [DataColumn](/api/types/DataColumn/)에 등록된 [ColumnFilter](/api/types/ColumnFilter/) 중 적용된 필터 또는 해제된 필터의 이름을 가져온다.  

#### Syntax

> function getActiveColumnFilters(column, active)  

#### Parameters

> **column**  
> Type: String\|object  
> ColumnName 또는 [DataColumn](/api/types/DataColumn) Object  

> **active**  
> Type: Boolean  
> Default: true  
> true를 입력하면 등록된 filter 중 적용된 filter를 가져온다. false를 입력하면 해제된 filter를 가져온다.  

#### Return value

> Type: array of Object  
> 입력된 active상태에 해당하는 [ColumnFilter](/api/types/ColumnFilter)의 배열이 반환된다.  

#### Example

<pre class="prettyprint">
    var aColumn = gridView.columnByField("customerId");
    var arr = gridView.getActiveColumnFilters(aColumn, true);
</pre>

