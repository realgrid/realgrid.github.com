---
layout: apipost
title: onRowGroupFootDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupFootDblClicked/
jsonly: true
tags:
  - click
  - event
  - rowGroupHead
  - rowGroupFoot
  - 로우그룹
---


#### Description

 사용자가 마우스로 RowGroup의 Foot셀을 더블 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupFootDblClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onRowGroupFootDblClicked =  function (grid) {
    console.log("onRowGroupFootDblClicked")
};
</pre>

---

#### Demo Links

* [Region Events](http://demo.realgrid.com/Event/RegionEvents/)