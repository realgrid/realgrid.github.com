---
layout: apipost
title: getChildCount
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getChildCount/
---


#### Description

> 지정한 데이터행의 자식 행 개수를 가져온다.  

#### Syntax

> function getChildCount(rowId)  

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

#### Return value

> Type: Number  
> 자식 행 개수  

##### Examples 

<pre class="prettyprint">
    var count = treeProvider.getChilCount(3);
</pre>

---

#### See Also

> [TreeView Data Model](http://demo.realgrid.net/Demo/TreeDataModel){:target="_blank"} 참조   