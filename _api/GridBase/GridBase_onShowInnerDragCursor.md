---
layout: apipost
title: onShowInnerDragCursor
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.25+
permalink: /api/GridBase/onShowInnerDragCursor/
tags:
  - drag&drop
  - draganddrop
  - dragging
  - 드래그
  - 드래그앤드롭
---

#### Description

 마우스가 선택된 셀의 테두리를 지나갈때 발생하는 이벤트이다.   
 return값으로 cursor이름을 넘겨주면 마우스커서가 변경된다.  
 (ex: "pointer", "crosshair", "move", "wait" 등등, http://www.w3.org/wiki/CSS/Properties/cursor)  
 null, false를 return하면 drag를 할 수 없다.   

#### Syntax

> function onShowInnerDragCursor(grid, dragCells) 

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **dragCells**  
> Type: Object
> 선택된 영역에 대한 정보이다.    

#### Return  

> Type: Boolean | String	  
> Default: null  
> 드래그 가능여부나 가능할때 표시하려는 마우스 커서명을 지정한다.    

#### Examples 

<pre class="prettyprint">
gridView.onShowInnerDragCursor = function(grid, dragCells) {
    console.log(JSON.stringify(dragCells)); 
    return "pointer";
}
</pre>

---

#### API Links
