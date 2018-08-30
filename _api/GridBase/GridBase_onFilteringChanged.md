---
layout: apipost
title: onFilteringChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onFilteringChanged/
tags:
  - filter
  - event
  - 필터
---


#### Description

 컬럼에 필터들이 설정되어 있고, 그 필터의 상태가 변경될 경우 호출된다.  

#### Syntax

> function onFilteringChanged(grid, column)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: [DataColumn](/api/types/DataColumn/)   
> 필터링된 컬럼 정보가 넘어온다.   
> RealGridJS 1.1.29부터 지원된다.    

#### Return

None.

#### Examples 

<pre class="prettyprint">
gridView.onFilteringChanged = function (grid, column){
    alert(column.name + "필터가 변경됨");
}
</pre>

---

#### Demo Links

* [Filtering Demo](http://demo.realgrid.com/Columns/ColumnFiltering/)

