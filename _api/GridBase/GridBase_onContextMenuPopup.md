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

 ContextMenu가 호출될때 표시되는 좌표가 반환된다.

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

> **elementName**  
> Type: string  
> 마우스 오른쪽 버튼이 클릭된 영역명.       

#### Return

> Type: boolean  
> false를 리턴하면 컨텍스트 메뉴가 표시되지 않는다.  

#### Examples 

<pre class="prettyprint">
gridView.onContextMenuPopup = function (grid, x, y, elementName) {
    console.log("onContextMenuPopup: x = " + x + ", y = " + y + ", elementName :" + elementName);
}
</pre>




