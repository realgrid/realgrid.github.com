---
layout: apipost
title: CellButton
part: Types
typename: Constants
order: CellButton
objectname: 
directiontype: 
permalink: /api/types/CellButton/
---

#### Description

> 데이터셀의 우측에 어떤 종류의 버튼을 표시할 지를 지정하는 상수다.

#### Members

> **NONE**  
> Value: "none"  
> 버튼을 표시하지 않는다.  

> **ACTION**  
> Value: "action"  
> 사용자가 마우스 클릭할 수 있는 버튼을 표시한다.  

> **POPUP**   
> Value: "popup"  
> 사용자가 마우스 클릭 시 팝업 메뉴가 실행되는 버튼을 표시한다.  

#### Description

> ACTION의 경우 버튼 클릭시 [onCellButtonClicked](/api/GridBase/onCellButtonClicked) Callback 함수가 호출된다.  
> POPUP의 경우 컬럼에 popupMenu 속성 값이 정의 되어야 하고 ([DataColumn](/api/types/DataColumn) 이 popupMenu 값과 [addPopupMenu](/api/GridBase/addPopupMenu) 호출시 name 값과 일치 해야 한다.  
> 팝업 메뉴의 메뉴 항목 클릭시 [onMenuItemClicked](/api/GridBase/onMenuItemClicked) Callback 함수가 호출된다.

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
	}]
	gridView.setColumns(columns);
</pre>

#### Demo Links

> [Edit Button Demo](http://demo.realgrid.net/Demo/EditButtons) 참조  
> [Cell Buttons](http://demo.realgrid.com/Demo/CellButtons) 참조  
> [B7-6 Cell Button](http://help.realgrid.com/tutorial/b7-6/) 참조  
> [B7-7 Popup Menu](http://help.realgrid.com/tutorial/b7-7/) 참조  




