---
layout: apipost
title: onValueChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onValueChanged/
---


#### Description

> 

#### Syntax

> function onValueChanged(provider, rowId)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**  
> Type: number  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    treeProvider.onValueChanged = function (provider, rowId) {
        console.log("onValueChanged:"+rowId);
    };
</pre>

