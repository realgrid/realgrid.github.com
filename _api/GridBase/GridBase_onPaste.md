---
layout: apipost
title: onPaste
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.26+
permalink: /api/GridBase/onPaste/
tags:
  - paste
  - 붙여넣기 
---


#### Description

 그리드에 붙여넣기를 시작하기 전에 발생한다.
 false를 return 하는 경우 붙여넣기가 발생하지 않는다.    
 입력 에디터가 표시된 상태에서는 발생하지 않는다.     

#### Syntax

> function onPaste(grid, index, event)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)  
> 붙여넣기가 된 CellIndex  

> **event**  
> Type: Object  
> event 정보    

#### Return  

> Type: Boolean  
> false를 리턴하면 붙여넣기가 취소된다.  

#### Examples 

<pre class="prettyprint">
gridView.onPaste = function (grid, index, event){
    console.log("붙여넣기 시작");    
}
</pre>

