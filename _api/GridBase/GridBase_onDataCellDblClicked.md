---
layout: apipost
title: onDataCellDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onDataCellDblClicked/
---


#### Description

> 사용자가 데이터 셀을 마우스로 더블클릭했을 때 호출된다.   

#### Syntax

> function onDataCellDblClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object.  
> 더블클릭된 데이터 셀의 인덱스  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onDataCellDblClicked =  function (grid, index) {
      console.log(index);
    };
</pre>

