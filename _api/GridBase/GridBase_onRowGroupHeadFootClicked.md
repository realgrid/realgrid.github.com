---
layout: apipost
title: onRowGroupHeadFootClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupHeadFootClicked/
jsonly: true
tags:
  - click
  - event
  - rowGroupHead
  - rowGroupFoot
  - 로우그룹
---


#### Description

> 사용자가 마우스로 RowGroup의 Head, Foot셀을 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupHeadFootClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: number  
> 클릭된 영역의 인덱스 값, head = -1, foot = -2

#### Return

> None.  

#### Example

<pre class="prettyprint">
    gridView.onRowGroupHeadFootClicked =  function (grid, index) {
        console.log("onRowGroupHeadFootClicked : " + "(" + index + ")")
    };
</pre>

#### See Also
> [onRowGroupHeaderFooterClicked](/api/GridBase/onRowGroupHeaderFooterClicked)