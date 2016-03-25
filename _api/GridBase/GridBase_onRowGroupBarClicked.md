---
layout: apipost
title: onRowGroupBarClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupBarClicked/
jsonly: true
tags:
  - event
  - click
  - rowGroupBar
---


#### Description

> 사용자가 마우스로 RowGroup의 Bar를 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupBarClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: number  
> RowGroup의 Level 값, expander를 클릭하는 경우 -1

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onRowGroupBarClicked =  function (grid, index) {
        console.log("onRowGroupBarClicked : " + "(" + index + ")")
    };
</pre>

