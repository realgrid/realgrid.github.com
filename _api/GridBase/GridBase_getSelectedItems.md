---
layout: apipost
title: getSelectedItems
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelectedItems/
tags:
  - select
  - itemIndex
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

#### Examples 

<pre class="prettyprint">
        var sel = gridView.getSelectedItems();
        window.console && console.log("SelectedItems: ", JSON.stringify(sel));
</pre>

#### See Also
> [getSelectedRows](/api/GridBase/getSelectedRows)