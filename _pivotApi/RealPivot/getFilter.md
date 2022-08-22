---
layout: apipost
title: getFilter
part: Objects
objectname: getFilter
directiontype: Function
permalink: /pivotApi/RealPivot/getFilter/
versions:
  - 1.0.9+
tags:
  - 필터
  - filter
---


#### Description

 설정되어 있는 필터 정보를 가져온다.     

#### Syntax

> function getFilter()

#### Parameters

> None.

#### Return value

> Type: Array of [FilterItem](/pivotApi/types/FilterItem/)      
> operation과 conditions로 구성된 객체를 가져온다.


#### Examples  

<pre class="prettyprint">
//filter and
pivot.filter({
operation: "and",  
conditions: [
    { name: "OrderYear", values: [1996] },
    { name: "UnitPrice", criteria: "value > 50" }
]});

console.log(pivot.getFilter());
</pre>

#### API Links

* [filter](/pivotApi/RealPivot/filter/)
