---
layout: apipost
title: addPopupMenu
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addPopupMenu/
---


#### Description

> 그리드에 Popup Menu를 추가한다. 추가된 메뉴는 데이터셀 등에 연결할 수 있다.

#### Syntax

> function addPopupMenu(name, menuItems)

#### Parameters

> **name**
> Type: string
> 메뉴 이름.

> **menuItems**
> Type: Array
> 계층적 구조의 메뉴 정보.

#### Return value

> None.

#### Example

<pre class="prettyprint">
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
            ....
        }]
    }];
    grid.addPopupMenu("menu1", menu);

    // 그리드에 등록된 메뉴를 column에 연결한다.
    var aColumn = grid.columnByField("column1");
    aColumn.button = "popup";
    aColumn.popupMenu = "menu1";
    grid.setColumn(aColumn);

    grid.onMenuItemClicked = function (grid, data) {
        var s = data.label + (data.checked ? " checked" : "");
        if (data.tag)
            s += "n" + "tag: " + data.tag;
        alert(s);
    };
</pre>

