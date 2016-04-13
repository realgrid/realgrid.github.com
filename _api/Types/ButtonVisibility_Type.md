---
layout: apipost
title: ButtonVisibility
part: Types
typename: Constants
order: ButtonVisibility
objectname: 
directiontype: 
permalink: /api/types/ButtonVisibility/
jsonly: true
tags:
  - buttonVisibility
  - 버튼표시
---

#### Description

> 데이터 셀에 버튼을 표시하는 방법을 지정한다.

#### Members

> **ALWAYS**   
> Value: "always"  
> 항상 버튼을 표시한다.   

> **DEFAULT**  
> Value: "default"   
> hovering, focused상태에서만 버튼을 표시한다.    

> **VISIBLE**  
> Value: "visible"    
> focused된 상태에서만 버튼을 표시한다.       

> **HIDDEN**   
> Value: "hidden"  
> 버튼을 표시하지 않는다.     

#### Examples   

<pre class="prettyprint">
	var columns = [{
        "name": "OrderID",
        "fieldName": "OrderID",
        "type": "data",
        "width": "90",
        "button": "action",
        "buttonVisibility": "always",
        "styles": {
            "textAlignment": "near"
        },
        "header": {
            "text": "Order"
        }
    }, {
        "name": "CustomerID",
        "fieldName": "CustomerID",
        "type": "data",
        "width": "130",
        "button": "action",
        "buttonVisibility": "visible",
        "styles": {
            "textAlignment": "center"
        },
        "header": {
            "text": "Customer ID"
        }
    }, {
        "name": "EmployeeID",
        "fieldName": "EmployeeID",
        "type": "data",
        "width": "100",
        "button": "action",
        "buttonVisibility": "hidden",
        "styles": {
            "textAlignment": "far"
        },
        "header": {
            "text": "Employee ID"
        }
	}]
	gridView.setColumns(columns);
</pre>

#### Demo Links

> [Cell Buttons](http://demo.realgrid.com/Demo/CellButtons) 참조  
> [B7-6 Cell Button](http://help.realgrid.com/tutorial/b7-6/) 참조  
