---
layout: apipost
title: onRowParentChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowParentChanged/
jsonly: true
---


#### Description

> 부모가 바뀐 뒤 발생한다. 

#### 지원 Version  

> JS 1.0.5 이후  

#### Syntax

> function onRowParentChanged(provider, rowId, parentId, childIndex)  

#### Parameters

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.   

> **rowId**    
> Type: Number    
> 이동하려는 트리 데이터행   

> **parentId**    
> Type: Number    
> 이동하려는 위치의 부모 트리 데이터행       

> **childIndex**    
> Type: Number    
> 이동하려는 부모의 자식들 중 몇번째 위치로 이동하는지 위치 index  

#### Return value

> None. 

#### Example

<pre class="prettyprint">
    treeDataProvider.onRowParentChanged = function (provider, rowId, parentId, childIndex)  {
        console.log("onRowParentChanged: " + rowId + ", " + parentId + ", " + childIndex);
    }
</pre>

