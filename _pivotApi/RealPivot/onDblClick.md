---
layout: apipost
title: onDblClick
part: Objects
objectname: onDblClick
directiontype: Callback
permalink: /pivotApi/RealPivot/onDblClick/
tags:
  - click
  - cellClick
  - dblclick
  - celldblClick
  - 클릭
  - 더블클릭
  - event
---


#### Description

 사용자가 그리드를 마우스로 더블 클릭했을 때 호출된다.        

#### Syntax

> function onDblClick(pivot, type, index)

#### Arguments

> **pivot**  
> Type: PivotView     
> pivotView 컨트롤    

> **type**  
> Type: String    
> 더블클릭된 위치의 유형, "column" | "row" | "body"   

> **index**  
> Type: Object  
> 더블클릭된 위치의 columns, rows의 객체 정보, valueField   

#### Return

> NONE.

#### Examples 

<pre class="prettyprint">
pivot.onDblClick = function (pivot, type, index) {
    console.log("pivot onDblClick"); 
}
</pre>

---

#### API Links

* [onClick](/pivotApi/RealPivot/onClick/)   