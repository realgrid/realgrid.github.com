---
layout: apipost
title: onRowGroupHeaderFooterDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupHeaderFooterDblClicked/
jsonly: true
tags:
  - event
  - rowGroupHeader
  - rowGroupFooter
  - rowGroupClick
---


#### Description

> 사용자가 마우스로 RowGroup의 Header, Footer 더블 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupHeaderFooterDblClicked (grid, index)  

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
    gridView.onRowGroupHeaderFooterDblClicked =  function (grid, index) {
        console.log("onRowGroupHeaderFooterDblClicked : " + "(" + index + ")")
    };
</pre>

