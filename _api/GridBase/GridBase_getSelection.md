---
layout: apipost
title: getSelection
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelection/
tags:
  - select
  - 선택
---


#### Description

> 현재 선택된 영역 정보를 가져온다.


#### Syntax

> function getSelection()

#### Parameters

> None.

#### Return value

> Type: object  
> 선택 영역 정보

##### Examples 

<pre class="prettyprint">
        var sel = gridView.getSelection();
        window.console && console.log("Selection: ", JSON.stringify(sel));
</pre>

#See Also
[getSelectionData](/api/GridBase/getSelectionData)