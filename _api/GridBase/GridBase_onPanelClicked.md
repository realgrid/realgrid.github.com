---
layout: apipost
title: onPanelClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onPanelClicked/
jsonly: true
tags:
  - rowGroup
  - groupPanel
  - panel
  - 그룹판넬
  - event
  - click
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

##### Examples 

<pre class="prettyprint">
    gridView.onPanelClicked =  function (grid) {
        console.log("onPanelClicked")
    };
</pre>

#### See Also
> [onPanelDblClicked](/api/GridBase/onPanelDblClicked)