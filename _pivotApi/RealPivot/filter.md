---
layout: apipost
title: filter
part: Objects
objectname: filter
directiontype: Function
permalink: /pivotApi/RealPivot/filter/
tags:
  - 필터
---


#### Description

 특정 조건으로 필터링 할 때 사용한다.        

#### Syntax

> function filter(condition)

#### Parameters

> **condition**     
> Type: Object   
> operation과 conditions로 구성된 객체를 지정한다.         

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
	//filter and
    pivot.filter({
    operation: "and",  
    conditions: [
        { name: "OrderYear", values: [1996] },
        { name: "UnitPrice", criteria: "value > 50" }
    ]});

    //filter or
    pivot.filter({
    operation: "or",  
    conditions: [
        { name: "OrderYear", values: [1996] },
        { name: "UnitPrice", criteria: "value > 50" }
    ]});    
</pre>

