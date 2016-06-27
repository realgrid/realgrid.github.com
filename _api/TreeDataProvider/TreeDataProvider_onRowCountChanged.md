---
layout: apipost
title: onRowCountChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowCountChanged/
tags:
 - count
---


#### Description

> 행 추가 및 삭제 등으로 행의 개수가 변경됐을 때 호출된다.

#### Syntax
> function onRowCountChanged(provider, count)

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object  

> **count**  
> Type: Number  
> 변경된 행의 갯수  

#### Return

> none

#### Example

<pre class="prettyprint">
    treeProvider.onRowCountChanged = function (provider, count) {
        console.log("TreeProvider changed.");
    };
</pre>
