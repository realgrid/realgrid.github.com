---
layout: apipost
title: onTreeItemExpanding
part: Objects
objectname: TreeView
directiontype: Callback
permalink: /api/TreeView/onTreeItemExpanding/
---


#### Description

> TreeView의 아이템 노드가 펼쳐지기 직전에 호출된다.

#### Syntax

> function onTreeItemExpanding (tree, itemIndex, rowId)

#### Arguments

> **tree**  
> Type: [TreeView](/api/TreeView/)  
> TreeView컨트롤  

> **itemIndex**  
> Type: number  
> 펼쳐지려는 행의 아이템 인덱스  

> **rowId**  
> Type: number  
> 펼쳐지려는 행의 rowId.  

#### Return

> Type: boolean  
> false를 리턴하면 아이템이 펼쳐지지 않는다.  

#### Example

<pre class="prettyprint">
    grid.onTreeItemExpanding = function (tree, itemIndex, rowId) {
        return false;
    };
</pre>

