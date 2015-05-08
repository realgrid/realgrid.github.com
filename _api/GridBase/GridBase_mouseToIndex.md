---
layout: apipost
title: mouseToIndex
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/mouseToIndex/
---


#### Description

> (x, y) 좌표에 해당하는 셀의 위치 정보를 가져온다.  

#### Syntax

> function mouseToIndex(x, y)  

#### Parameters

> **x**  
> Type: number  
> x 좌표.  


> **y**  
> Type: number  
> y 좌표.  

#### Return value

> [CellIndex](/api/types/CellIndex/) 값.  

#### Example

<pre class="prettyprint">
    var index = grid.mouseToIndex(100, 100);
    var data = grid.getValue(index.itemIndex, index,fieldName);
</pre>

