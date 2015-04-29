---
layout: apipost
title: onSelectionAdded
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onSelectionAdded/
---


#### Description

> 선택 영역이 새로 추가됐을 때 호출된다.

#### Syntax

> function onSelectionAdded (grid, selection)

#### Arguments

> *grid*
> Type: [GridView|GridView](/api/GridBase/)
> GridView 컨트롤

> *selection*
> Type: [SelectionItem](/api/GridBase/)과 같은 구조의 object.
> 선택 영영 정보.

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onSelectionAdded =  function (grid, selection) {
      console.log(selection);
    };
</pre>

