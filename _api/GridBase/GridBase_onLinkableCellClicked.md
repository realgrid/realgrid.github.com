---
layout: apipost
title: onLinkableCellClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onLinkableCellClicked/
tags:
  - linkCell
  - renderer
  - link
  - linkClick
  - event
  - 링크
---


#### Description

> LinkCellRenderer로 정의된 셀을 클릭시 발생한다.  

#### Syntax

> function onLinkableCellClicked(grid, index, url)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type:  [CellIndex](/api/types/CellIndex/)  
> 클릭된 CellIndex  

> **url**  
> Type: String  
> 클릭된 셀에 담겨 있던 url 정보  

#### Return

> None.

#### Examples 

<pre class="prettyprint">
    gridView.onLinkableCellClicked = function (grid, index, url) {
        console.log("onLinkableCellClicked: " + JSON.stringify(index) + " => " + url);  
        window.open(url, '_newtab');
    };
</pre>

#### See Also
> [LinkCellRenderer](/api/types/LinkCellRenderer/), [LinkCellRendere Demo](http://demo.realgrid.com/Demo/LinkCellRenderer)