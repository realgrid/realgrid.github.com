---
layout: apipost
title: onGetEditValue
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onGetEditValue/
---


#### Description

> 필터링이 시작될때 호출된다.  

#### Syntax

> function onGetEditValue(grid, index, editResult)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type:  [CellIndex](/api/types/CellIndex/)  
> 편집된 CellIndex  

> **editResult**  
> Type:  Object  
> 편집된 셀의	 값  

#### Return  

> None.

#### Example

<pre class="prettyprint">
	grid.onGetEditValue = function (grid, index, editResult) {
	    console.log("onGetEditValue: " + JSON.stringify(editResult));
	} 
</pre>

