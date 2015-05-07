---
layout: apipost
title: getSelection
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelection/
---


#### Description

> 현재 선택된 영역 정보를 가져온다.


#### Syntax

> function getSelection()

#### Parameters

#### Return value

> Type: object
> 선택 영역 정보

#### Example

<pre class="prettyprint">
        var sel = grid.getSelection();
        window.console && console.log("Selection: ", JSON.stringify(sel));
</pre>

