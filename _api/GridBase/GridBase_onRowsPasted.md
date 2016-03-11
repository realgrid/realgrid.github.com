---
layout: apipost
title: onRowsPasted
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowsPasted/
jsonly: true
---


#### Description

> 사용자가 여러 행을 붙여넣기 했을 때 발생한다.  

#### Syntax

> function onRowsPasted (grid, items)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **items**  
> Type: array of number  
> 붙여넣기된 행들의 itemIndex  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onRowsPasted =  function (grid, items) {
        alert("붙여넣기된 행들 : " + items);
    };
</pre>
