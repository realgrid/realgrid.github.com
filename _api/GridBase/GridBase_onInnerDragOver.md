---
layout: apipost
title: onInnerDragOver
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.25+
permalink: /api/GridBase/onInnerDragOver/
tags:
  - drag&drop
  - draganddrop
  - dragging
  - 드래그
  - 드래그앤드롭
---

#### Description

 드래그를 상태에서 마우스가 움직일때 발생하는 이벤트이다.       
 false를 return하면 drag가 해당 셀에 drop할 수 없다.       

#### Syntax

> function onInnerDragOver(grid, index, dragCells) 

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)   
> GridBase 컨트롤   

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)   
> 셀 인덱스   

> **dragCells**  
> Type: Object
> 선택된 영역에 대한 정보이다.    

#### Return  

> Type: Boolean 
> Default: null  
> false를 지정하면 drop할 수 없다.        

#### Examples 

<pre class="prettyprint">
gridView.onInnerDragOver = function(grid, index, dragCells) {
	console.log(JSON.stringify(index));
    console.log(JSON.stringify(dragCells)); 
    return true;
}
</pre>

---

#### API Links
