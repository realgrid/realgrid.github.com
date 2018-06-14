---
layout: apipost
title: FilterOperation
part: Types
typename: Constants
order: FilterOperation
objectname: 
directiontype: 
permalink: /pivotApi/types/FilterOperation/
tags:
  - 필터
  - 연산자
  - 오퍼레이션
---

#### Description

다수의 필터간 연산 방식을 지정하는 상수이다.  

#### Members

> **AND**   
> Value: "and"  
> 모든 필터의 조건을 만족     

> **OR**  
> Value: "or"   
> 필터의 조건 중 하나를 만족       


#### Examples   

<pre class="prettyprint">
pivot.filter({
	operation: "or",  // and | or
	conditions: [
	    { name: "OrderYear", values: [1996] },
	    { name: "UnitPrice", criteria: "value > 50" }
	]
});	
</pre>

---

