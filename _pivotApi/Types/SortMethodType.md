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


#### Members

> **LABEL**   
> Value: "label"  
>    

> **VALUE**  
> Value: "value"   
>   


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

---

