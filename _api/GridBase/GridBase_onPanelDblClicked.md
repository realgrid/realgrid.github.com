---
layout: apipost
title: onPanelDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onPanelDblClicked/
jsonly: true
tags:
  - event
  - panel
  - groupPanel
  - doubleClick
  - 더블클릭
  - 그룹판넬

---


#### Description

> 사용자가 마우스로 Panel을 더블 클릭했을 때 호출된다.  

#### Syntax

> function onPanelDblClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

##### Examples 

<pre class="prettyprint">
    gridView.onPanelDblClicked =  function (grid) {
        console.log("onPanelDblClicked")
    };
</pre>

#### See Also
> [onPanelClicked](/api/GridBase/onPanelClicked)