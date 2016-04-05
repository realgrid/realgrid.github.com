---
layout: apipost
title: onRowParentChanging
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowParentChanging/
jsonly: true
tags:
  - 부모노드 변경
  - 트리노드 이동
  - 트리변경
  - change parent
  - changeRowParent
versions:
  - JS 1.0.15+
---


#### Description

> [TreeDataProvider.changeRowParent](/api/TreeDataProvider/changeRowParent/)함수를 사용하여 부모를 바꾸려고 할때 발생한다. 

#### Syntax

> function onRowParentChanging(provider, rowId, parentId, childIndex)  

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

> type: Boolean  
> false 를 return하면 이동이 취소된다.  

#### Example

<pre class="prettyprint">
    treeProvider.onRowParentChanging = function (provider, rowId, parentId, childIndex)  {
        if (parentId === '-1') {
            return false;      //Root 로는 이동 불가
        } else {
            return true;
        }
    }
</pre>

---

#### See Also

> [Tree Move Row](http://demo.realgrid.net/Demo/TreeMoveRow){:target="_blank"} 참조   