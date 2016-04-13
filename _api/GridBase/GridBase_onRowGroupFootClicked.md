---
layout: apipost
title: onRowGroupFootClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupFootClicked/
jsonly: true
tags:
  - click
  - event
  - rowGroupHead
  - rowGroupFoot
  - 로우그룹
---


#### Description

> 사용자가 마우스로 RowGroup의 Foot셀을 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupFootClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.onRowGroupFootClicked =  function (grid, index) {
        console.log("onRowGroupFootClicked : " + "(" + index + ")")
    };
</pre>

#### See Also
>  [Region Events](http://demo.realgrid.com/Demo/RegionEvents)