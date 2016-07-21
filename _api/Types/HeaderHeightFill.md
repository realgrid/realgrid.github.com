---
layout: apipost
title: HeaderHeightFill
part: Types
typename: Constants
order: HeaderHeightFill
objectname: 
directiontype: 
permalink: /api/types/HeaderHeightFill/
versions:
  - JS 1.1.17+
tags:
  - HeaderHeightFill
  - 헤더 높이  
---

#### Description

 헤더 높이를 계산하는 방식을 지정하는 상수입니다.

#### Members

> **DEFAULT**  
> Value: "default"  
> 헤더의 높이가 자동으로 계산된다.    

> **FIXED**  
> Value: "fixed"  
> 헤더의 높이가 고정된다.    

#### Examples   

<pre class="prettyprint">
    gridView.setHeader({
        height: 150,                 // 헤더 높이 지정 
        heightFill: RealGridJS.HeaderHeightFill.DEFAULT
    });
    ...생략...
    var columns = [{
        type: "group",
        name: "GroupOrder",
        orientation: "vertical",
        width: 250,
        header: {"visible": false},
        columns: [{
            type: "group",
            name: "GroupIds",
            header: {
                fixedHeight: 20      // GroupIds 높이 20 지정
            },
            columns: [{
                name: "OrderID",
                fieldName: "OrderID",
                type: "data",
                width: "90",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    fixedHeight: 40, // OrderID 높이 40 지정
                    text: "Order"
                }
            }, {
    ...생략...
</pre>

---

#### API Links

* [Header](/api/types/Header/)    