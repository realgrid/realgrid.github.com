---
layout: apipost
title: onPanelClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onPanelClicked/
jsonly: true
---


#### Description

> 사용자가 마우스로 Panel을 클릭했을 때 호출된다.  

#### Syntax

> function onPanelClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onPanelClicked =  function (grid) {
        console.log("onPanelClicked")
    };
</pre>

