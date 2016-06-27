---
layout: apipost
title: onIndicatorCellDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onIndicatorCellDblClicked/
jsonly: true
tags:
  - event
  - click
  - indicator
  - dblClick
---

#### Description

* 사용자가 마우스로 Indicator셀을 더블 클릭했을 때 호출된다.  

#### Syntax

> function onIndicatorCellDblClicked (grid, itemIndex)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: number  
> 클릭된 영역의 인덱스 값, head = -1, foot = -2  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
grid.onIndicatorCellDblClicked =  function (grid, itemIndex) {
    console.log("onIndicatorCellDblClicked : " + "(" + itemIndex + ")")
};
</pre>

