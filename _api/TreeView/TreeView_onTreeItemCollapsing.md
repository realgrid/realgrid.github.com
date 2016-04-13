---
layout: apipost
title: onTreeItemCollapsing
part: Objects
objectname: TreeView
directiontype: Callback
permalink: /api/TreeView/onTreeItemCollapsing/
jsonly: true
---


#### Description

> TreeView의 값이 변경 호출된다.

#### Syntax

> function onTreeItemCollapsing (tree, itemIndex, rowId)

#### Arguments

> **tree**  
> Type: [TreeView](/api/TreeView/)  
> TreeView컨트롤  

> **itemIndex**  
> Type: number  
> 접혀지려는 [아이템](/api/features/Grid%20Item/)행의 index.

> **rowId**  
> Type: number  
> 접혀지려는 행의 rowId.  

#### Return

> Type: boolean  
> false를 리턴하면 아이템이 펼쳐지지 않는다.  

#### Examples 

<pre class="prettyprint">
    treeView.onTreeItemCollapsing = function (tree, itemIndex, rowId) {
        return false;
    };
</pre>

