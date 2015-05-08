---
layout: apipost
title: collapse
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/collapse/
---


#### Description

> 

#### Syntax

> function collapse(itemIndex, recursive)

#### Parameters

> **itemIndex**  
> Type: Number  
> 축소할 아이템행의 Index이다.  

> **recursive**  
> Type: Boolean  
> Default: false  
> true로 입력하면 펼쳐진 자식행이 있는 경우 모두 축소 시킨다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    treeMain.collapse(0,true);
</pre>

