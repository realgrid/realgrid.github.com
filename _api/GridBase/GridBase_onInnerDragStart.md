---
layout: apipost
title: onInnerDragStart
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.25+
permalink: /api/GridBase/onInnerDragStart/
tags:
  - drag&drop
  - draganddrop
  - dragging
  - 드래그
  - 드래그앤드롭
---

#### Description

 드래그를 시작하면 발생하는 이벤트이다.    
 false를 return하면 drag가 취소된다.     

#### Syntax

> function onInnerDragStart(grid, dragCells) 

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **dragCells**  
> Type: Object
> 선택된 영역에 대한 정보이다.    

#### Return  

> Type: Boolean 
> Default: null  
> false를 지정하면 드래그가 취소된다.      

#### Examples 

<pre class="prettyprint">
gridView.onInnerDragStart = function(grid, dragCells) {
    console.log(JSON.stringify(dragCells)); 
    return true;
}
</pre>

---

#### API Links
