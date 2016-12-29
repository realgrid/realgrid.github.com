---
layout: apipost
title: setRowHeight
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setRowHeight/
jsonly: true
versions:
  - JS 1.1.21+
tags:
  - 행높이변경
  - 높이변경
  - rowheight
  - height
---


#### Description

 행 높이를 지정한 높이로 변경한다.      
 (* displayOptions.eachRowResizable: true로 지정되어 있어야 한다.)

#### Syntax

> function setRowHeight(itemIndex, height, refresh)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 높이 변경할 아이템의 index를 지정한다.  

> **height**  
> Type: Number  
> Default: 0  
> 0으로 지정시 displayOptions.minRowHeight, maxRowHeight 에 맞게 행 높이가 변경된다. 값 지정시 지정한 행 높이로 변경 된다.    
> **refresh**  
> Type: Boolean  
> Default: true  
> 변경한 행 높이를 바로 화면에 반영할 것인지의 여부를 지정한다.    


#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
gridView.setRowHeight(1,100,true);    
</pre>

---

#### API Links

* [fitRowHeight](/api/GridBase/fitRowHeight)
* [fitRowHeightAll](/api/GridBase/fitRowHeightAll)
* [clearRowHeights](/api/GridBase/clearRowHeights)

#### Demo Links

* [fitRowHeight](http://demo.realgrid.com/Demo/fitRowHeight)