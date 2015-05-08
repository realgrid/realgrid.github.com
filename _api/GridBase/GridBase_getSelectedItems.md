---
layout: apipost
title: getSelectedItems
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelectedItems/
---


#### Description

> 현재 선택된 행(itemIndex)들을 가져온다.


#### Syntax

> function getSelectedItems()

#### Parameters

> None.

#### Return value

> Type: Arrary of Number  
> 현재 선택된 행들.

#### Example

<pre class="prettyprint">
        var sel = grid.getSelectedItems();
        window.console && console.log("SelectedItems: ", JSON.stringify(sel));
</pre>

