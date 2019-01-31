---
layout: apipost
title: getRowHeight
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getRowHeight/
jsonly: true
versions:
  - JS 1.1.31+
tags:
  - 행높이변경
  - 높이변경
  - rowheight
  - height
---


#### Description

그리드 행의 높이를 가져온다.         

#### Syntax

> function getEditValue()  

#### Parameters

> **itemIndex**  
> Type: Number  
> 높이를 가져올 아이템의 index를 지정한다.  

#### Return value

> Type: Number  
> 행의 높이 값.  

#### Examples 

<pre class="prettyprint">
var height = gridView.getRowHeight(2);
</pre>

---

#### API Links

* [setRowHeight](/api/GridBase/setRowHeight)
* [fitRowHeight](/api/GridBase/fitRowHeight)
* [fitRowHeightAll](/api/GridBase/fitRowHeightAll)
* [clearRowHeights](/api/GridBase/clearRowHeights)