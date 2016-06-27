---
layout: apipost
title: onRowsAdded
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowsAdded/
tags:
 - 행 추가 이벤트
---


#### Description

 

#### Syntax

> function onRowsAdded (provider, parentId, rowIds)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **parentId**  
> Type: Array of number  
> 부모 rowId  

> **rowIds**  
> Type: Array of number  
> 추가된 데이터행들의 트리 아이디.  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
treeProvider.onRowsAdded = function (provider, parentId, rowIds) {
    console.log("onRowsAdded:" + parentId + ", " + rowIds.length);
};
</pre>

