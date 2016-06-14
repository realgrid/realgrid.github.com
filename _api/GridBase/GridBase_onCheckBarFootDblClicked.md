---
layout: apipost
title: onCheckBarFootDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCheckBarFootDblClicked/
jsonly: true
tags:
  - click
  - event
  - checkBar
  - dblClick
---


#### Description

 사용자가 마우스로 CheckBarFoot셀을 더블 클릭했을 때 호출된다.  

#### Syntax

> function onCheckBarFootDblClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onCheckBarFootDblClicked =  function (grid) {
    console.log("onCheckBarFootDblClicked");
};
</pre>

