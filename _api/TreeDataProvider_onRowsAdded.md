---
layout: apipost
title: onRowsAdded
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowsAdded/
---


#### Description

> 

#### Syntax

> function onRowsAdded (provider, parentId, rowIds)

#### Arguments

> **provider**
> Type: [TreeDataProvider\|TreeDataProvider](/api/TreeDataProvider/)
> TreeDataProvider object.

> **parentId**
> Type: Array of number
> 부모 rowId

> **rowIds**
> Type: Array of number
> 

#### Return

> None.

#### Example

<pre class="prettyprint">
    treeProvider.onRowsAdded = function (provider, parentId, rowIds) {
        console.log("onRowsAdded:" + parentId + ", " + rowIds.length);
    };
</pre>

