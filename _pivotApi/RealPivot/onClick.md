---
layout: apipost
title: onClick
part: Objects
objectname: onClick
directiontype: Callback
permalink: /pivotApi/RealPivot/onClick/
tags:
  - click
  - cellClick
  - event
  - 클릭
 
---


#### Description

 사용자가 그리드를 마우스로 클릭했을 때 호출된다.        

#### Syntax

> function onClick(pivot, type, index)

#### Arguments

> **pivot**    
> Type: PivotView     
> pivotView 컨트롤    

> **type**   
> Type: String    
> 클릭된 위치의 유형, "column" | "row" | "body"   

> **index**   
> Type: Object   
> 클릭된 위치의 columns, rows의 객체 정보, valueField    

#### Return value

> NONE.

#### Examples 

<pre class="prettyprint">
pivot.onClick = function (pivot, type, index) {
    console.log("pivot click"); 
}
</pre>

---

#### API Links

* [onDblClick](/pivotApi/RealPivot/onDblClick/)   
