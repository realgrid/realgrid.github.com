---
layout: apipost
title: onStateBarCellDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onStateBarCellDblClicked/
jsonly: true
tags:
  - event
  - click
  - dblClick
  - stateBar
---


#### Description

 사용자가 마우스로 StateBar셀을 더블 클릭했을 때 호출된다.  

#### Syntax

> function onStateBarCellDblClicked (grid, itemIndex)  

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
gridView.onStateBarCellDblClicked =  function (grid, itemIndex) {
    console.log("onStateBarCellDblClicked : " + "(" + itemIndex + ")")
};
</pre>

---

#### Demo Links

* [Region Events](http://demo.realgrid.com/Event/RegionEvents/)