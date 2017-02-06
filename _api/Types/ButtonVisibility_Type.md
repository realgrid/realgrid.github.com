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
  - button
  - 버튼
---

#### Description

[DataColumn](/api/types/DataColumn)의 `buttonVisibility`속성과 `editButtonVisibility`속성에 사용되며, 데이터 셀에 버튼을 표시하는 방법을 지정한다.

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

> **ROWFOCUSED**   
> Value: "rowfocused"   
> 행이 선택되면 버튼을 표시한다.   

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
    "editButtonVisibility": "visible",
    "lables": ["ID1", "ID2"],
    "values": ["V1", "V2"],
    "editor": {
        type: "dropdown"
    },
    "header": {
        "text": "Employee ID"
    }
}]
gridView.setColumns(columns);
</pre>

---

#### Tutorial Links

* [B7-6 Cell Button](/tutorial/b7-6/)

#### API Links

* [CellButton](/api/types/CellButton/)

#### Demo Links

* [Cell Buttons](http://demo.realgrid.com/CellComponent/CellButton/)

