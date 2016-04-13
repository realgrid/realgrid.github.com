---
layout: apipost
title: onIndicatorCellClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onIndicatorCellClicked/
jsonly: true
tags:
  - event
  - click
  - indicator
---


#### Description

> 사용자가 마우스로 Indicator셀을 클릭했을 때 호출된다.  

#### Syntax

> function onIndicatorCellClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: number  
> 클릭된 영역의 인덱스 값, head = -1, foot = -2  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
    grid.onIndicatorCellClicked =  function (grid, index) {
        console.log("onIndicatorCellClicked : " + "(" + index + ")")
    };
</pre>

