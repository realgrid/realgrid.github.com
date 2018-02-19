---
layout: apipost
title: ValueType
part: Types
typename: Constants
order: ValueType
objectname: 
directiontype: 
permalink: /pivotApi/types/ValueType/
tags:
  - 밸류타입
---

#### Description

표시되는 값의 유형.   
PivotField의 values.expression에 사용한다.  

#### Members

> **SUM**    
> Value: "sum"   
> 합계    

> **COUNT**  
> Value: "count"   
> 개수    

> **MIN**  
> Value: "min"    
> 최소값    

> **MAX**  
> Value: "max"    
> 최대값    

> **AVERAGE**  
> Value: "average"    
> 평균    

> **DISTINCT**  
> Value: "distinct"    
> 중복제거    


#### Examples   

<pre class="prettyprint">
pivot.setPivotFields({
    columns: ["OrderYear", "OrderQuarter", "OrderMonth"],
    rows: ["CustomerID", "OrderID", "ProductName"],
    values: [{
        name: "Quantity",
        expression: "sum"
    }, {
        name: "UnitPrice",
        expression: "max"
    }]
});
</pre>

---

