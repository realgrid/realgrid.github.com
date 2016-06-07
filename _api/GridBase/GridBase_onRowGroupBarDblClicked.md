---
layout: apipost
title: onRowGroupBarDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupBarDblClicked/
jsonly: true
tags:
  - event
  - click
  - rowGroupBar
---


#### Description

> 사용자가 마우스로 RowGroup의 Bar를 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupBarDblClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: number  
> RowGroup의 Level 값, expander를 클릭하는 경우 -1

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
    grid.onRowGroupBarDblClicked =  function (grid, index) {
        console.log("onRowGroupBarDblClicked : " + "(" + index + ")")
    };
</pre>

