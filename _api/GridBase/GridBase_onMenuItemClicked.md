---
layout: apipost
title: onMenuItemClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onMenuItemClicked/
tags:
  - popup
  - button
  - popupMenu
---


#### Description

> [GridBase addPopupMenu](/api/GridBase/addPopupMenu/)로 추가한 팝업메뉴 항목이 클릭됐을 때 호출된다.  
> [MenuItem](/api/types/MenuItem/)에 callback이 지정된 경우 호출되지 않는다.

#### Syntax

> function onMenuItemClicked (grid, data)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **data**  
> Type: [MenuItem](/api/types/MenuItem/)    
> 클릭된 [MenuItem](/api/types/MenuItem/) 객체    

#### Return

None.

#### Examples 

<pre class="prettyprint">
    gridView.onMenuItemClicked = function (grid, data) {
        var s = data.label + (data.checked ? " checked" : "");
        if (data.tag)
            s += "n" + "tag: " + data.tag;
        alert(s);
    };
</pre>

#### Demo Links
> [onContextMenuItemClicked](/api/GridBase/onContextMenuItemClicked)