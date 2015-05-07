---
layout: apipost
title: OnSelectionEnded
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/OnSelectionEnded/
---


#### Description

> 사용자가 마우스나 키보드로 선택 영역 변경을 완료했을 때 호출된다. 변경된 선택 영역의 정보는 [GridBase getSelection\|getSelection](/api/GridBase/)함수로 알수 있고 선택영역의 데이터는 [GridBase getSelectionData\|getSelectionData](/api/GridBase/) 함수로 알 수 있다.

#### Syntax

> function OnSelectionEnded (grid)

#### Arguments

> **grid**
> Type: [GridView\|GridView](/api/GridBase/)
> GridView 컨트롤

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.OnSelectionEnded =  function (grid) {
        var cells = grid.getSelectionData();
        console.log(cells);  
    };
</pre>

