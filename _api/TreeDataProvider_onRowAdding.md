---
layout: apipost
title: onRowAdding
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowAdding/
---


#### Description

> 

#### Syntax

> function onRowAdding (provider, rowId, index)

#### Arguments

> *provider*
> Type: [TreeDataProvider|TreeDataProvider](/api/TreeDataProvider/)
> TreeDataProvider object.

> *rowId*
> Type: Number
> 

> *index*
> Type: Number
> 

#### Return

> None.

#### Example

<pre class="prettyprint">
    treeProvider.onRowAdding = function (provider, rowId, index) {
        console.log("onRowAdding:" + rowId + ", " + index);
    };
</pre>

