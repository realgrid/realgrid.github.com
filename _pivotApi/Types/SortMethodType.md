---
layout: apipost
title: SortMethod
part: Types
typename: Constants
order: SortMethod
objectname: 
directiontype: 
permalink: /pivotApi/types/SortMethod/
tags:
  - 소트방식
  - 소트방법
---

#### Description
컬럼/행의 정렬 방식

#### Members

> **LABEL**   
> Value: "label"  
> 라벨의 값을 기준으로 정렬   

> **VALUE**  
> Value: "value"   
> 특정 조건의 값을 기준으로 정렬  
> Example: 컬럼의 2018년 판매액 요약을 기준으로 행을 정렬

#### Examples   

<pre class="prettyprint">
pivot.sort({
  	column: {
      	method: "label",
      	labels: [  
          { name: "OrderYear", direction: "descending"},
          { name: "OrderQuarter", direction: "descending"},
          { name: "OrderMonth", directions: "descending"}
     	]
  	},
  	row: {
        method: "value",
        fieldName: "UnitPrice", 
        direction: "descending",
        conditions: [{
          "name": "OrderYear", value: "2018"
        }]
  	}
});
</pre>

---

