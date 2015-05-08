---
layout: apipost
title: onRowsRemoved
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowsRemoved/
---



#### Description

> 

#### Syntax

> function onRowsRemoved (provider, rowIds)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowIds**  
> Type: Array of number  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    treeProvider.onRowsRemoved = function (provider, rowIds) {
        console.log("onRowsRemoved:" + rowIds.length);
    };
</pre>

