---
layout: apipost
title: onRowRemoved
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowRemoved/
---


#### Description

> 

#### Syntax

> function onRowRemoved (provider, rowId)

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
    treeProvider.onRowRemoved = function (provider, rowId) {
        console.log(rowId," Removed");
    };
</pre>

