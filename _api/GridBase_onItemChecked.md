---
layout: apipost
title: onItemChecked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onItemChecked/
---


#### Description

> 사용자가 checkBar의 체크박스를 클릭하거나 [GridView checkItem|grid.checkItem](/api/GridBase/)()을 호출하여 체크를 변경한 경우 호출된다.

#### Syntax

> function onItemChecked(grid, itemIndex, checked)

#### Arguments

> *grid*
> Type: [GridView|GridView](/api/GridBase/)
> GridView 컨트롤

> *itemIndex*
> Type: Number
> 체크된 데이터행의 아이템 인덱스이다.

> *checked*
> Type: Boolean
> 체크되었으면 true, 해제되었으면 false가 출력된다.

#### Return

None.

#### Example

<pre class="prettyprint">
    grid.onItemChecked = function (grid, itemIndex, checked) {
        console.log("onItemChecked:",grid.id, itemIndex, checked);
    };
</pre>

