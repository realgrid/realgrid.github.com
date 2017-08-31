---
layout: apipost
title: onInnerDrop
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.25+
permalink: /api/GridBase/onInnerDrop/
tags:
  - drag&drop
  - draganddrop
  - dragging
  - 드래그
  - 드래그앤드롭
---

#### Description

 드래그 상태에서 마우스버튼을 놓으면 발생하는 이벤트이다.  drop된 CellIndex를 확인할 수 있다.  

#### Syntax

> function onInnerDrop(grid, dropIndex, dragCells) 

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)   
> GridBase 컨트롤   

> **dropIndex**  
> Type: [CellIndex](/api/types/CellIndex/)   
> 셀 인덱스   

> **dragCells**  
> Type: Object
> 선택된 영역에 대한 정보이다.    

#### Return  

> None.     

#### Examples 

<pre class="prettyprint">
gridView.onInnerDrop = function(grid, dropIndex, dragCells) {
	console.log(JSON.stringify(dropIndex));
    console.log(JSON.stringify(dragCells)); 
}
</pre>

---

#### API Links
