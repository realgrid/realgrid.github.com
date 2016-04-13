---
layout: apipost
title: onTreeItemChanged
part: Objects
objectname: TreeView
directiontype: Callback
permalink: /api/TreeView/onTreeItemChanged/
jsonly: true
---


#### Description

> TreeView의 값이 변경된 후 commit()시 발생한다.

#### Syntax

> function onTreeItemChanged (tree, itemIndex, rowId)

#### Arguments

> **tree**  
> Type: [TreeView](/api/TreeView/)  
> TreeView컨트롤  

> **itemIndex**  
> Type: number  
> 값이 변경된 행의 아이템 인덱스  

> **rowId**  
> Type: number  
> 값이 변경된 행의 rowId.  

#### Return

> None.

#### Examples 

<pre class="prettyprint">
    treeView.onTreeItemChanged = function (tree, itemIndex, rowId) {
        console.log("TreeItem item changed:: " + itemIndex);	
    };
</pre>

