---
layout: apipost
title: onErrorClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onErrorClicked/
---


#### Description

> 그리드에 발생한 에러창을 클릭할때 발생한다.  

#### Syntax

> function onErrorClicked(grid, error)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **error**  
> Type: String  
> 에러 메시지  

#### Return

> None.

#### Example

<pre class="prettyprint">
        grid.onErrorClicked = function (grid, error) {
            console.log("onErrorClicked: " + error);
        };
</pre>

