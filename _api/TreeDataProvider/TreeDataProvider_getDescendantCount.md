---
layout: apipost
title: getDescendantCount
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getDescendantCount/
---


#### Description

> 지정한 데이터행의 모든 자손 행의 개수를 가져온다.  

#### Syntax

> function getDescendantCount(rowId)  

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

#### Return value

> Type: Number  
> 자손 행 개수  

#### Example

<pre class="prettyprint">
    var count = treeProvider.getDescendantCount(10);
</pre>

---

#### See Also

> [TreeView Data Model](http://demo.realgrid.net/Demo/TreeDataModel){:target="_blank"} 참조   