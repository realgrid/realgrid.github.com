---
layout: apipost
title: onSetupClosed
part: Objects
objectname: onSetupClosed
directiontype: Callback
permalink: /pivotApi/RealPivot/onSetupClosed/
versions:
  - 1.0.13+
tags:
  - setup
  - 설정
  - 변경
  - change
  - changing  
---

#### Description

 setup창이 종료된후 호출되는 이벤트.    

#### Syntax

> function onSetupClosed(pivot, config)    

#### Arguments

> **pivot**   
> Type: PivotView      
> pivotView 컨트롤     

> **config**   
> Type: Object    
> columns, rows, values, filter, sort 배열로 구성된 설정값    

#### Return

> None.

#### Examples 

<pre class="prettyprint">
pivot.onSetupClosed = function (grid, config) {
  console.log(config);
}
</pre>

---

#### API Links

* [setPivotFields](/pivotApi/RealPivot/setPivotFields/)   
