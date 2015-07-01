---
layout: apipost
title: onTreeItemCollapsed
part: Objects
objectname: TreeView
directiontype: Callback
permalink: /api/TreeView/onTreeItemCollapsed/
jsonly: true
---


#### Description

> TreeView의 아이템 노드가 접힌 후에 호출된다.

#### Syntax

> function onTreeItemCollapsed (tree, itemIndex, rowId)

#### Arguments

> **tree**  
> Type: [TreeView](/api/TreeView/)  
> TreeView컨트롤  

> **itemIndex**  
> Type: number  
> 접혀진 행의 아이템 인덱스  

> **rowId**  
> Type: number  
> 접혀진 행의 rowId.  

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onTreeItemCollapsed = function (tree, itemIndex, rowId) {
        console.log("TreeItem Collapsed: " + itemIndex);	
    };
</pre>

