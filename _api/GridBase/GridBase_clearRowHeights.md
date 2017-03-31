---
layout: apipost
title: clearRowHeights
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearRowHeights/
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

 변경 적용한 개별 행 높이를 초기값으로 되돌린다.     

#### Syntax

> function clearRowHeights(refresh)  

#### Parameters
    
> **refresh**  
> Type: Boolean  
> Default: true  
> 초기화한 행 높이를 바로 화면에 반영할 것인지의 여부를 지정한다.    


#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
gridView.clearRowHeights(true);    
</pre>

---

#### API Links

* [fitRowHeight](/api/GridBase/fitRowHeight)
* [fitRowHeightAll](/api/GridBase/fitRowHeightAll)
* [setRowHeight](/api/GridBase/setRowHeight)

#### Demo Links

* [fitRowHeight](http://demo.realgrid.com/Columns/FitRowHeight)