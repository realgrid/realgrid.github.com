---
layout: apipost
title: onRowSiblingMoving
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowSiblingMoving/
jsonly: true
---


#### Description

> 형제간 위치를 바꾸려고 할때 발생한다. (같은 부모의 형제간 위치 이동)  

#### 지원 Version  

> JS 1.0.5 이후  

#### Syntax

> function onRowSiblingMoving(provider, rowId, delta)  

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

> type: Boolean  
> false 를 return하면 이동이 취소된다.  

#### Example

<pre class="prettyprint">
    treeDataProvider.onRowSiblingMoving = function (provider, rowId, delta) {
        if (rowId === '10') {
            return false;      //rowId가 10인 행은 이동 불가
        } else {
            return true;
        }
    }
</pre>

