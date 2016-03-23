---
layout: apipost
title: onRowSiblingMoved
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowSiblingMoved/
jsonly: true
versions:
  - JS 1.0.15+
tags:
 - 행 이동
 - moveRowSibling
 - move row event
---


#### Description

> [TreeDataProvider.moveRowSibling()](/api/TreeDataProvider/moveRowSibling/) 함수를 사용하여 형제간 위치 이동이 완료된 후 발생한다. (같은 부모의 형제간 위치 이동)  

#### Syntax

> function onRowSiblingMoved(provider, rowId, delta)  

#### Parameters

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.   

> **rowId**    
> Type: Number    
> 이동하려는 트리 데이터행.    

> **delta**    
> Type: Number    
> 이동하려는 상하 위치 단계값      

#### Return value

> None.   

#### Example

<pre class="prettyprint">
    treeProvider.onRowSiblingMoved = function (provider, rowId, delta) {
        console.log("onRowSiblingMoved: " + rowId + ", " + delta);
    }
</pre>

