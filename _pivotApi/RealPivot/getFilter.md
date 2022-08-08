---
layout: apipost
title: getFilter
part: Objects
objectname: getFilter
directiontype: Function
permalink: /pivotApi/RealPivot/getFilter/
tags:
  - 필터
---


#### Description

 설정된 필터 조건을 가져온다.     

#### Syntax

> function getFilter()

#### Parameters

> None

#### Return value

> Type: Object   
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

