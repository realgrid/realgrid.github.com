---
layout: apipost
title: onRowUpdated
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowUpdated/
---


#### Description

> 

#### Syntax

> function onRowUpdated (provider, rowId)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**  
> number  
> 변경된 데이터행의 id  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    dataProvider.onRowUpdated = function (provider, rowId) {
        console.log("onRowUpdated: "+rowId);
    };
</pre>

