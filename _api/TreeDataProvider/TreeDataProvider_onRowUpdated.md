---
layout: apipost
title: onRowUpdated
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowUpdated/
tags:
 - update event
 - 트리 수정 이벤트
---


#### Description

> TreeDataProvider에 데이터가 수정되면 발생하는 이벤트 함수.  

#### Syntax

> function onRowUpdated (provider, rowId)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**  
> number  
> 수정된 데이터행의 트리 아이디. 

#### Return

> None.  

#### Example

<pre class="prettyprint">
    treeProvider.onRowUpdated = function (provider, rowId) {
        console.log("onRowUpdated: "+rowId);
    };
</pre>

