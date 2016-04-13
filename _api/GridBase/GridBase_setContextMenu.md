---
layout: apipost
title: setContextMenu
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setContextMenu/
tags:
  - popupMenu
  - contextMenu
  - 팝업메뉴
  - 콘텍스트메뉴
---


#### Description

> 그리드에서 오른쪽 마우스를 클릭했을때 표시되는 컨텍스트 메뉴에 추가할 메뉴 항목들을 지정한다.  
> 메뉴가 클릭되면 [onContextMenuItemClicked](/api/GridBase/onContextMenuItemClicked) callback이 호출된다.  

#### Syntax

> function setContextMenu(menuItems)

#### Parameters

> **menuItems**  
> Type: Array of [MenuItem](/api/types/MenuItem/)  
> 메뉴 정보 배열.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.setContextMenu([
    { label: "Menu1"}, 
    { label: "Menu2"}, 
    { label: "-" // menu separator}, 
    { label: "Menu3" }, 
    { label: "child Menus",
        children:[
            {label:"child1"},
            {label:"child2"}
        ]
    }
]);

gridView.onContextMenuItemClicked = function (grid, label, index) {
    alert("Context menu가 클릭됐습니다: " + label.label + "n" + JSON.stringify(index));
};
</pre>
    
#### See Also
> [onContextMenuItemClicked](/api/GridBase/onContextMenuItemClicked)  