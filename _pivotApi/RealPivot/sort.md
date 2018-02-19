---
layout: apipost
title: sort
part: Objects
objectname: sort
directiontype: Function
permalink: /pivotApi/RealPivot/sort/
tags:
  - 소트
---


#### Description

 피벗 그리드를 label이나 value 기준으로 정렬하려 할 때 사용한다.        

#### Syntax

> function sort(condition)

#### Parameters

> **condition**   
> Type: Object   
> column 객체와 row 객체로 구성된 겍체   
> 각 객체는 method와 labels, direction으로 이루어져 있다.       

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
//sort label
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
      	method: "label",
      	labels: [
          { name: "CustomerID", direction: "ascending"},
          { name: "ProductName", direction: "descending"}
     	 ]
  	}
});

//sort value
pivot.sort({
  	column: {
      	method: "value",
      fieldName: "UnitPrice",
      direction: "descending"
    },
    row: {
        method: "value",
        fieldName: "UnitPrice", 
        direction: "descending"
    }
});
</pre>

