---
layout: apipost
title: setContextMenu
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setContextMenu/
---


#### Description

> Flash player 컨텍스트 메뉴에 추가할 메뉴 항목들을 지정한다.

#### Syntax

> function setContextMenu(menuItems)

#### Parameters

> **menuItems**  
> Type: Array  
> 메뉴 정보 배열.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setContextMenu([{
        label: "Menu1"
    }, {
        label: "Menu2"
    }, {
        label: "-" // menu separator
    }, {
        label: "Menu3"
    }]);

    grid.onContextMenuItemClicked = function (grid, label, index) {
        alert("Context menu가 클릭됐습니다: " + label + "n" + JSON.stringify(index));
    };
</pre>

