---
layout: apipost
title: onRowStateChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowStateChanged/
tags:
 - 상태 변경 이벤트
---


#### Description

> TreeDataProvider의 데이터행의 rowState가 변경되는 경우 호출된다.  

#### Syntax

> function onRowStateChanged (provider, rowId)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**  
> Type: number  
> 변경된 데이터행의 트리 아이디. 

#### Return

> None.  

#### Example

<pre class="prettyprint">
    treeProvider.onRowStateChanged = function (provider, rowId) {
        console.log("onRowStateChanged:" + rowId);
    };
</pre>