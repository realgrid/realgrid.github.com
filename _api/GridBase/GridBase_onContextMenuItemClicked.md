---
layout: apipost
title: onContextMenuPopup
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onContextMenuPopup/
tags:
  - event
  - contextMenu
  - popupMenu
---


#### Description

> ContextMenu가 호출될때 표시되는 좌표가 반환된다.

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **x**  
> Type: number   
> ContextMenu가 호출된 x좌표값.    

> **y**  
> Type: number  
> ContextMenu가 호출된 y좌표값.    

#### Return

None

#### Examples 

<pre class="prettyprint">
    gridView.onContextMenuPopup = function (grid, x, y) {
        console.log("onContextMenuPopup: x = " + x + ", y = " + y);
    }
</pre>

