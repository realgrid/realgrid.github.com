---
layout: apipost
title: onPasted
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.26+
permalink: /api/GridBase/onPasted/
tags:
  - paste
  - 붙여넣기 
---


#### Description

 그리드에 붙여넣기가 끝난 후 발생한다.
 입력 에디터가 표시된 상태에서는 발생하지 않는다.     

#### Syntax

> function onPasted(grid)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return  

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onPasted = function (grid){
    console.log("붙여넣기 종료");    
}
</pre>

