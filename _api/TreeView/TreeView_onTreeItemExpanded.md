---
layout: apipost
title: onTreeItemExpanded
part: Objects
objectname: TreeView
directiontype: Callback
permalink: /api/TreeView/onTreeItemExpanded/
jsonly: true
---


#### Description

> TreeView의 아이템 노드가 펼쳐진 후에 호출된다.

#### Syntax

> function onTreeItemExpanded (tree, itemIndex, rowId)

#### Arguments

> **tree**  
> Type: [TreeView](/api/TreeView/)  
> TreeView컨트롤  

> **itemIndex**  
> Type: number  
> 펼쳐진 행의 아이템 인덱스  

> **rowId**  
> Type: number  
> 펼쳐진 행의 rowId.  

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onTreeItemExpanded = function (tree, itemIndex, rowId) {
        console.log("TreeItem expanded: " + itemIndex);	
    };
</pre>

