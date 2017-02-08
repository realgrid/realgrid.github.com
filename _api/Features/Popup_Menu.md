---
layout: apipost
title: Popup Menu
part: Features
objectname: 
directiontype: 
permalink: /api/features/Popup Menu/
tags:
  - popup
  - menu
  - 메뉴
  - 팝업
  - 팝업메뉴
---

#### Description

컬럼 별로 팝업 메뉴를 지정할 수 있다.

<pre class="prettyprint">
// popup menus
var menu = [{
    label: "menu1 입니다.",
    enabled: true,
    children: [{
        label: "submenu1 입니다."
    }, {
        label: "submenu2 입니다."
    }]
}, {
    label: "menu2 입니다",
    enabled: false
}, {
    label: "-"
}, {
    label: "menu3 입니다",
    type: "check",
    checked: true,
    tag: "check_menu"
}, {
    label: "group menu",
    children: [{
        label: "group1 - 첫번째",
        type: "radio",
        group: "group1",
        checked: true
    }, {
        label: "group1 - 두번째",
        type: "radio",
        group: "group1"
    }, {
        label: "group1 - 세번째",
        type: "radio",
        group: "group1"
    }]
}];
grid.addPopupMenu("menu1", menu);
grid.onMenuItemClicked = function (grid, data) {
    var s = data.label + (data.checked ? " checked" : "");
    if (data.tag)
        s += "\n" + "tag: " + data.tag;
    alert(s);
};
 

//적용방법
var columns = [{
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "100",
    "button": "popup",
    "popupMenu": "menu1",
    "alwaysShowButton": true,
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Customer ID"
    }
}];
</pre>

---

#### Demo Links

* [Popup Menu Demo](http://demo.realgrid.com/CellComponent/PopupMenu/) 
