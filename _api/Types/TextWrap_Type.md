---
layout: apipost
title: TextWrap
part: Types
typename: Constants
order: TextWrap
objectname: 
directiontype: 
permalink: /api/types/TextWrap/
---

#### Description

그리드 스타일 중 textWrap의 값을 지정하는 상수다.

#### Members

> **NORMAL**  
> Value: "normal"   
> editor가 멀티라인일 경우 컬럼의 폭보다 문자열이 길면 줄바꿈이 된다.   

> **EXPLICIT**  
> Value: "explicit"   
> editor가 멀티라인일 경우 명시적으로 줄바꿈 코드(\n)가 있는 경우에만 줄바꿈이 된다.     

> **ELLIPSE**  
> Value: "ellipse"  
> 컬럼의 폭보다 표시되는 문자열이 긴 경우 보이는 문자열 마지막을 '...' 표시 한다.     
> (그리드 속도에 영향을 미칠 수 있으니 제한적인 컬럼에만 사용해야 한다.)  
> RealGridJS 1.1.23 부터 지원한다. 

#### Examples   

<pre class="prettyprint">
var columns = [{
    "name": "OrderID",
    "fieldName": "OrderID",
    "editor": {
        "type": "number"
    },
    "width": "90",
    "styles": {
        "textAlignment": "near",
        "textWrap": "ellipse"
    },
    "header": {
        "text": "Order"
    }
}, {
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "130",
    "styles": {
        "textAlignment": "center",
        "textWrap": "ellipse"

    },
    "header": {
        "text": "Customer ID"
    }
}, {
    "name": "EmployeeID",
    "fieldName": "EmployeeID",
    "editor": {
        "type": "multiline"
    },
    "width": "100",
    "styles": {
        "textAlignment": "far",
        "textWrap": "ellipse"
    },
    "header": {
        "text": "Employee ID"
    }
}]
gridView.setColumns(columns);
</pre>

---

#### Demo Links

* [Style Properties](http://demo.realgrid.com/GridStyle/StyleProperties/) 참조  
