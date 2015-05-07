---
layout: apipost
title: onDataCellClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onDataCellClicked/
---


#### Description

> 사용자가 데이터 셀을 마우스로 클릭했을 때 호출된다. 

#### Syntax

> function onDataCellClicked (grid, index)

#### Arguments

> **grid**
> Type: [GridView\|GridView](/api/GridBase/)
> GridView 컨트롤

> **index**
> Type: [CellIndex](/api/GridBase/)과 같은 구조의 object.
> 클릭된 데이터 셀의 인덱스

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onDataCellClicked =  function (grid, index) {
      console.log(index);
    };
</pre>

