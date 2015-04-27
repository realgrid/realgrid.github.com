---
layout: apipost
title: testMethod
part: Objects
objectname: GridBase
directiontype: Method
---

h2. Description

> 

h2. Syntax

> function onRowAdded (provider, rowId)

h2. Arguments

> *provider*
> Type: [[APIReference#TreeDataProvider|TreeDataProvider]]
> TreeDataProvider object.

> *rowId*
> number
> 

h2. Return

> None.

h2. Example

<pre type="code">
    treeProvider.onRowAdded = function (provider, rowId) {
        console.log(rowId);
    };
</pre>

