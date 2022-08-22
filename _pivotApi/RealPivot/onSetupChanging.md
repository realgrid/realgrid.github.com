---
layout: apipost
title: onSetupChanging
part: Objects
objectname: onSetupChanging
directiontype: Callback
permalink: /pivotApi/RealPivot/onSetupChanging/
versions:
  - 1.0.9+
tags:
  - setup
  - 설정
  - 변경
  - change
  - changing  
---


#### Description

 setup창을 통해 설정을 변경한 경우 발생하는 콜백이다. 기존 설정값과 새로운 설정값을 확인할 수 있다.             

#### Syntax

> function onSetupChanging(pivot, oldConfig, newConfig)

#### Arguments

> **pivot**   
> Type: PivotView      
> pivotView 컨트롤     

> **oldConfig**   
> Type: Object   
> columns, rows, values, filter, sort 배열로 구성된 기존 설정값     

> **newConfig**   
> Type: Object    
> columns, rows, values, filter, sort 배열로 구성된 새로운 설정값    

#### Return

> None.

#### Examples 

<pre class="prettyprint">
pivot.onSetupChanging = function (grid, oldConfig, newConfig) {
  console.log(oldConfig, newConfig);
}
</pre>

---

#### API Links

* [setPivotFields](/pivotApi/RealPivot/setPivotFields/)   
