---
layout: apipost
title: onRowAdded
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowAdded/
---



#### Description

> 

#### Syntax

> function onRowAdded (provider, rowId)

#### Arguments

> **provider**
> Type: [TreeDataProvider\|TreeDataProvider](/api/TreeDataProvider/)
> TreeDataProvider object.

> **rowId**
> number
> 

#### Return

> None.

#### Example

<pre class="prettyprint">
    treeProvider.onRowAdded = function (provider, rowId) {
        console.log(rowId);
    };
</pre>

