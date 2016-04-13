---
layout: apipost
title: changeRowParent
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/changeRowParent/
jsonly: true
versions:
  - JS 1.0.15+
tags:
 - parentId
 - childIndex 
 - 부모이동

---


#### Description

> 특정 데이터행의 위치를 지정한 행의 하위로 이동한다.  

#### Syntax

> function changeRowParent(rowId, parentId, childIndex)  

#### Parameters

> **rowId**    
> Type: Number    
> 이동하려는 트리 데이터행   

> **parentId**    
> Type: Number    
> 이동하려는 위치의 부모 트리 데이터행       

> **childIndex**    
> Type: Number    
> 이동하려는 부모의 자식들중 몇번째 위치로 이동할 것인지를 지정     

#### Return value

> none.

#### Examples 

<pre class="prettyprint">
	//rowId가 10인 행을 rowId가 40인 행의 자식으로 이동하면서 자식들 중 첫번째에 위치하게 한다.
	treeProvider.changeRowParent(10, 40, 0);  
</pre>

---

#### Demo Links

> [TreeView Move Row](http://demo.realgrid.net/Demo/TreeMoveRow){:target="_blank"} 참조    