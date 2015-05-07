---
layout: apipost
title: onLinkableCellClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onLinkableCellClicked/
---


#### Description

> LinkCellRenderer로 정의된 셀을 클릭시 발생한다.

#### Syntax

> function onLinkableCellClicked(grid, index, url)

#### Arguments

> **grid**
> Type: [GridView\|GridView](/api/GridBase/)
> GridView 컨트롤

> **index**
> Type:  [CellIndex\|CellIndex](/api/GridBase/)
> 클릭된 CellIndex

> **url**
> Type: String
> 클릭된 셀에 담겨 있던 url 정보

#### Return

None.

#### Example

<pre class="prettyprint">
    grdMain.onLinkableCellClicked = function (grid, index, url) {
        console.log("onLinkableCellClicked: " + JSON.stringify(index) + " => " + url);
        window.open(url, '_newtab');
    };
</pre>

