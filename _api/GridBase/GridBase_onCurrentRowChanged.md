---
layout: apipost
title: onCurrentRowChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCurrentRowChanged/
---


#### Description

> dataRow의 위치가 변경된 후 호출되는 callback 이다.

#### Syntax

> function onCurrentRowChanged (grid, oldRow, newRow)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **oldRow**  
> Number  
> 변경 전 데이터행의 Index   

> **newRow**  
> Number  
> 변경 후 데이터행의 Index   

#### Return

> None  

#### Example

<pre class="prettyprint">
    grid.onCurrentRowChanged =  function (grid, oldRow, newRow) {
      alert(onCurrentRowChanged: " + "(" + oldRow + " => " + newRow + ")");
    };
</pre>

