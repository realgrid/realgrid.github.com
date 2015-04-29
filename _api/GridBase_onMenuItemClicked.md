---
layout: apipost
title: onMenuItemClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onMenuItemClicked/
---


#### Description

> [GridBase addPopupMenu|addPopupMenu](/api/GridBase/)로 추가한 팝업메뉴 항목이 클릭됐을 때 호출된다.

#### Syntax

> function onMenuItemClicked (grid, data)

#### Arguments

> *grid*
> Type: [GridView|GridView](/api/GridBase/)
> GridView 컨트롤

#### Return

None.

#### Example

<pre class="prettyprint">
    grid.onMenuItemClicked = function (grid, data) {
        var s = data.label + (data.checked ? " checked" : "");
        if (data.tag)
            s += "n" + "tag: " + data.tag;
        alert(s);
    };
</pre>

