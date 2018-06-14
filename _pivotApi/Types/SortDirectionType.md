---
layout: apipost
title: SortDirection
part: Types
typename: Constants
order: SortDirection
objectname: 
directiontype: 
permalink: /pivotApi/types/SortDirection/
tags:
  - 소트방식
  - 소트방법
  - 정렬방법
---

#### Description


#### Members

> **NONE**   
> Value: "none"  
> 정렬하지 않음   

> **ASCENDING**  
> Value: "ascending"   
> 순차 정렬  

> **DESCENDING**  
> Value: "descending"   
> 역차 정렬  


#### Examples   

<pre class="prettyprint">
pivot.setPivotFields({
    columns: [
        {
            name: "OrderYear",
            direction: "descending"
        }, {
            name: "OrderQuarter",
            direction: "ascending"
        }
    ],
    rows: ["CustomerID", "ProductName"],
    values: [{
        name: "Quantity",
        expression: "sum"
    }, {
        name: "UnitPrice",
        expression: "sum"
    }],
});
</pre>

---

