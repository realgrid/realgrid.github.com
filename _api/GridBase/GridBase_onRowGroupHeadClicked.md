---
layout: apipost
title: onRowGroupHeadClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupHeadClicked/
jsonly: true
tags:
  - click
  - event
  - rowGroupHead
  - rowGroupFoot
  - 로우그룹
---


#### Description

> 사용자가 마우스로 RowGroup의 Head셀을 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupHeadClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

##### Examples 

<pre class="prettyprint">
    gridView.onRowGroupHeadClicked =  function (grid, index) {
        console.log("onRowGroupHeadClicked : " + "(" + index + ")")
    };
</pre>

#### See Also
>  [Region Events](http://demo.realgrid.com/Demo/RegionEvents)