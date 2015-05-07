---
layout: apipost
title: onRowUpdating
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowUpdating/
---


#### Description

> 

#### Syntax

> function onRowUpdating (provider, rowId)

#### Arguments

> **provider**
> Type: [TreeDataProvider\|TreeDataProvider](/api/TreeDataProvider/)
> TreeDataProvider object.

> **rowId**
> Type: number
> 변경되는 데이터행의 id

#### Return

> None.

#### Example

<pre class="prettyprint">
    treeProvider.onRowUpdating = function (provider, rowId) {
        console.log("onRowUpdating:" + rowId);
    };
</pre>

