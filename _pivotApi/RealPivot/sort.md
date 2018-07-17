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
> [method](/pivotApi/types/SortMethod/)가 label인 경우 labels 속성이 필요하고  
> method가 value인 경우 fieldName, direction, conditions 속성 필요하다.       

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
        method: "value",
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
        conditions: [{
          name: "OrderYear", value: 1997
        }]
    }
});
</pre>

