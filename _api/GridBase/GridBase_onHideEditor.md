---
layout: apipost
title: onHideEditor
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/onHideEditor/
tags:
  - edit
---


#### Description	

> 편집이 완료되고 편집기가 사라질때 발생한다.

#### Syntax

> function onHideEditor()

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type:  [CellIndex](/api/types/CellIndex/)  
> 편집된 CellIndex  

#### Return  

> None.

#### Example

<pre class="prettyprint">
    gridView.onHideEditor = function (grid , index) {
        console.log("onHideEditor ", index);
    };    
</pre>

