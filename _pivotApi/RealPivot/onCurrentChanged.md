---
layout: apipost
title: onCurrentChanged
part: Objects
objectname: onCurrentChanged
directiontype: Callback
permalink: /pivotApi/RealPivot/onCurrentChanged/
versions:
  - 1.0.1+
tags:
  - click
  - cellClick
  - event
  - 클릭
 
---


#### Description

 포커스 셀의 위치가 변경된 후 호출되는 callback 이다.        

#### Syntax

> function onCurrentChanged(pivot, index)

#### Arguments

> **pivot**    
> Type: PivotView     
> pivotView 컨트롤     

> **index**   
> Type: Object   
> 클릭된 위치의 columns, rows의 객체 정보, valueField    

#### Return value

> NONE.

#### Examples 

<pre class="prettyprint">
pivot.onCurrentChanged = function (pivot, index) {
    console.log(index); 
}
</pre>

---

#### API Links

