---
layout: apipost
title: onRowStateChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowStateChanged/
---


#### Description

> TreeDataProvider의 데이터행의 rowState가 변경되는 경우 호출된다.  

#### Syntax

> function onRowStateChanged (provider, count)  

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
    treeProvider.onRowStateChanged = function (provider, rowId) {
        console.log("onRowStateChanged:" + rowId);
    };
</pre>

