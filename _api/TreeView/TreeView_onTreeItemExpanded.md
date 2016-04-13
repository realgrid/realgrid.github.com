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
> 펼쳐진 [아이템](/api/features/Grid%20Item/)행의 index.  

> **rowId**  
> Type: number  
> 펼쳐진 행의 rowId.  

#### Return

> None.

##### Examples 

<pre class="prettyprint">
    treeView.onTreeItemExpanded = function (tree, itemIndex, rowId) {
        console.log("TreeItem expanded: " + itemIndex);	
    };
</pre>

