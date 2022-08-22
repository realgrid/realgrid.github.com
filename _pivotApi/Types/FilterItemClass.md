---
layout: apipost
title: FilterItem
part: Types
typename: Classes
order: PivotField
objectname: 
directiontype: 
permalink: /pivotApi/types/FilterItem/
tags: 
  - 필터
  - filter
  - FieldMapping
---

#### Description
필터의 설정 모델이다.

#### Properties

> **operation**  
> Type: [FilterOperation](/pivotApi/types/FilterOperation/)
> 필터들간의 'and', 'or' 조건을 지정한다.     

> **conditions**  
> Type: Array of Object   
> name과 value, 혹은 name과 criteria로 구성된 Object   


#### Examples   

<pre class="prettyprint">
pivot.filter({
	operation: "and",  
	conditions: [
		{ name: "OrderYear", values: [1996] },
		{ name: "UnitPrice", criteria: "value > 50" }
	]
});
</pre>

---
