---
layout: apipost
title: ValueAlignment
part: Types
typename: Constants
order: ValueAlignment
objectname: 
directiontype: 
permalink: /pivotApi/types/ValueAlignment/
tags:
  - alignment
  - 위치
  - 정렬
---

#### Description

셀에 표시되는 데이터의 정렬 위치를 지정한다.   

#### Members

> **NEAR**   
> Value: "near"  
> 좌측에 정렬된다.         

> **CENTER**  
> Value: "center"   
> 가운데 정렬된다.       

> **FAR**  
> Value: "far"    
> 우측에 정렬된다.       


#### Examples   

<pre class="prettyprint">
pivot.setFieldMapping([{
    name: "OrderYear",
    sourceField: "OrderDate",
    dateType: "year",
    fieldHeader: "영업년도",
    displayFormat: "${value}년도",
    summaryFormat: "${value}년도 요약",
    valueEnable: false
}, {
    name: "Quantity",
    sourceField: "Quantity",
    fieldHeader: "판매량",
    numberFormat: "#,##0.##",
    labelEnable: false,
    valueAlignment: "far"   //<<========
}, {
    name: "UnitPrice",
    sourceField: "UnitPrice",
    fieldHeader: "판매액",
    numberFormat: "#0.00",
    labelEnable: false,
    valueAlignment: "near"  //<<========
}]);    
</pre>

---

