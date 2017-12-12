---
layout: apipost
title: CellButton
part: Types
typename: Constants
order: CellButton
objectname: 
directiontype: 
permalink: /api/types/CellButton/
tags:
    - cellbutton
    - button
    - 버튼
    - 셀버튼
---

#### Description

데이터 셀의 우측에 어떤 종류의 버튼을 표시할 지를 지정하는 유형으로 [DataColumn](/api/types/DataColumn)의 `button`속성에서 값을 지정한다.

#### Members

> **NONE**  
> Value: "none"  
> 버튼을 표시하지 않는다.  

> **ACTION**  
> Value: "action"  
> 사용자가 마우스 클릭할 수 있는 버튼을 표시한다.    
> 버튼 클릭시 [onCellButtonClicked](/api/GridBase/onCellButtonClicked) Callback 함수가 호출된다.  

> **POPUP**   
> Value: "popup"  
> 사용자가 마우스 클릭 시 팝업 메뉴가 실행되는 버튼을 표시한다.     
> 컬럼에 popupMenu 속성 값이 정의 되어야 하고 [DataColumn](/api/types/DataColumn) 이 popupMenu 값과 [addPopupMenu](/api/GridBase/addPopupMenu) 호출시 name 값과 일치 해야 한다. 팝업 메뉴의 메뉴 항목 클릭시 [onMenuItemClicked](/api/GridBase/onMenuItemClicked) Callback 함수가 호출된다.    

> **IMAGE**  
> Value: "image"  
> 사용자가 마우스 클릭할 수 있는 버튼을 표시한다.    
> 버튼 클릭시 [onImageButtonClicked](/api/GridBase/onImageButtonClicked) Callback 함수가 호출된다.  
> RealGridJS ver 1.1.20부터 지원된다.  

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
    "button": "popup",
    "popupMenu": "menu1",
    "buttonVisibility": "visible",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Customer ID"
    }
}, {
    "fieldName": "EmployeeID",
    "button" : "image",
    "imageButtons": {
        "imageWidth": 16,  // 없으면 기본값
        "height": 13,  // 없으면 기본값
        "margin": 2,   // Cell Border와의 간격
        "imageGap": 2, // 이미지 버튼간 간격
        "images": [{
            "name": "button1",
            "up": "assets/calendar_up.png",
            "hover": "assets/calendar_hover.png",
            "down": "assets/calendar_down.png",
            "width":45
        }, {
            "name": "button2",
            "up": "assets/ellipsis_up.png",
            "hover": "assets/ellipsis_hover.png",
            "down": "assets/ellipsis_down.png",
            "width":45
        }]
    }    
}]
gridView.setColumns(columns);
</pre>

---

#### Tutorial Links

* [B7-6 Cell Button](/tutorial/b7-6/)
* [B7-7 Popup Menu](/tutorial/b7-7/)

#### API Links

* [ButtonVisibility](/api/types/ButtonVisibility/)

#### Demo Links

* [Cell Buttons](http://demo.realgrid.com/CellComponent/CellButton/)


