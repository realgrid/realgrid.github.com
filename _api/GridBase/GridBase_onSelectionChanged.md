---
layout: apipost
title: onSelectionChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onSelectionChanged/
---


#### Description

> 사용자가 마우스나 키보드로 선택 영역의 크기를 변경하는 중에 호출된다. 변경 중인 선택 영역의 정보는 [getSelectionData](/api/GridBase/getSelectionData/) 함수로 알 수 있다.  
> grid.SelectOptions.style이 none인경우 발생하지 않는다  

#### Syntax

> function onSelectionChanged(grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onSelectionChanged =  function (grid) {
        var cells = grid.getSelectionData();
        console.log(cells);  
    };
</pre>

