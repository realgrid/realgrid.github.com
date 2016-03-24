---
layout: apipost
title: onRowUpdating
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowUpdating/
tags:
 - update event
 - 트리 수정 이벤트
---


#### Description

> TreeDataProvider에 데이터가 수정되기 전에 발생하는 이벤트 함수.  
> 

#### Syntax

> function onRowUpdating (provider, rowId)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**  
> Type: number  
> 수정되는 데이터행의 트리 아이디.  

#### Return

> type: Boolean  
> false 를 return하면 수정이 취소된다.  

#### Example

<pre class="prettyprint">
    treeProvider.onRowUpdating = function (provider, rowId) {
        console.log("onRowUpdating:" + rowId);
        return true;
    };
</pre>

