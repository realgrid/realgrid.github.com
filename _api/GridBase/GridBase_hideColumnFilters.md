---
layout: apipost
title: hideColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/hideColumnFilters/
jsonly: true
versions:
  - JS 1.1.29+
tags:
  - filter
  - 필터
  - 컬럼필터
  - columnfilter
---


#### Description

 [DataColumn](/api/types/DataColumn)에 등록된 [ColumnFilter](/api/types/ColumnFilter)들 중, filterNames 배열에 포함된 필터명을 갖는 filter들을 숨기거나 다시 표시한다.   
 active된 filter를 숨기는 경우 active된 상태로 숨겨진다.  


#### Syntax

> function hideColumnFilters(column, filterNames, active)

#### Parameters

> **column**  
> Type: String\|Object  
> fieldName 또는 [DataColumn](/api/types/DataColumn/) Object  

> **filterNames**  
> Type: Array of String[] \| String  
> 필터 이름 배열이나 필드명 문자열.  

> **active**  
> Type: Boolean  
> true를 입력하면 입력된 column의 filter를 모두 숨긴다. false면 다시 표시한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var aColumn = gridView.columnByField("content");
gridView.activateColumnFilters(aColumn, ["filter1", "filter2", "filter3"], true);
....
gridView.activateColumnFilters("col1", "filter1", false);
gridView.hideColumnFilters("col1", ["filter1"], true);   //filter1을 필터목록에서 숨긴다. 
</pre>

---

#### API Links

* [activateAllColumnFilters](/api/GridBase/activateAllColumnFilters)
* [setColumnFilters](/api/GridBase/setColumnFilters)
* [clearColumnFilters](/api/GridBase/setColumnFilters)  

#### Demo Links

* [Filtering Demo](http://demo.realgrid.com/Columns/ColumnFiltering/)