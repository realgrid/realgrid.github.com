---
layout: apipost
title: onStateBarCellClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onStateBarCellClicked/
jsonly: true
tags:
  - event
  - click
  - stateBar
---


#### Description

> 사용자가 마우스로 StateBar셀을 클릭했을 때 호출된다.  

#### Syntax

> function onStateBarCellClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: number  
> 클릭된 영역의 인덱스 값, head = -1, foot = -2

#### Return

> None.  

##### Examples 

<pre class="prettyprint">
    gridView.onStateBarCellClicked =  function (grid, index) {
        console.log("onStateBarCellClicked : " + "(" + index + ")")
    };
</pre>

#### See Also
> [Region Events](http://demo.realgrid.com/Demo/RegionEvents)