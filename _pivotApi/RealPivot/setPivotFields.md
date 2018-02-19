	---
layout: apipost
title: setPivotFields
part: Objects
objectname: setPivotFields
directiontype: Function
permalink: /pivotApi/RealPivot/setPivotFields/
tags:
  - 피벗필드
  - 필드
---


#### Description

 피벗 그리드를 구성하는 필드들을 지정한다.    

#### Syntax

> function setPivotFields(source)

#### Parameters

> **source**  
> Type: Object 
> columns, rows, values 배열로 구성된 객체    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
	pivot.setPivotFields({
	    columns: ["OrderYear", "OrderQuarter", "OrderMonth"],
	    rows: ["CustomerID", "ProductName"],
	    values: [{
	        name: "Quantity",
	        expression: "sum"
	    }, {
	        name: "UnitPrice",
	        expression: "max"
	    }]
	});
</pre>

