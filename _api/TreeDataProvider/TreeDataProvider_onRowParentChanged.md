---
layout: apipost
title: onRowParentChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowParentChanged/
jsonly: true
versions:
  - JS 1.0.15+
tags:
  - 부모노드 변경
  - 트리노드 이동
  - 트리변경
  - change parent
  - changeRowParent
---


#### Description

> [TreeDataProvider.changeRowParent](/api/TreeDataProvider/changeRowParent/)함수를 사용하여 부모가 바뀐 뒤 발생한다. 

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

#### Examples 

<pre class="prettyprint">
    treeProvider.onRowParentChanged = function (provider, rowId, parentId, childIndex)  {
        console.log("onRowParentChanged: " + rowId + ", " + parentId + ", " + childIndex);
    }
</pre>

---

#### Demo Links
#### See Also

#### See Also

> [Tree Move Row](http://demo.realgrid.net/Demo/TreeMoveRow){:target="_blank"} 참조   