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
---

#### Description

필터의 operation에 지정하는 상수이다.  
condition간 연관관계를 나타낸다.  

#### Members

> **AND**   
> Value: "and"  
> 모든 조건을 만족     

> **OR**  
> Value: "or"   
> 대상 조건 중 하나의 조건을 만족       


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

