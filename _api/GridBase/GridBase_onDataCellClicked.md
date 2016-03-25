---
layout: apipost
title: onDataCellClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onDataCellClicked/
tags:
  - click
  - dataCell
  - cellClick
  - event
---


#### Description

> 사용자가 데이터 셀을 마우스로 클릭했을 때 호출된다.   

#### Syntax

> function onDataCellClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object.  
> 클릭된 데이터 셀의 인덱스  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    gridView.onDataCellClicked =  function (grid, index) {
      console.log(index);
    };
</pre>

