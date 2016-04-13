---
layout: apipost
title: getChildren
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getChildren/
---


#### Description

> 모든 자식 행들의 rowId를 가져온다.

#### Syntax

> function getChildren(rowId)

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

#### Return value

> Type: Array of Number.  
> 배열로 만들어진 Row Id들의 목록.  

#### Examples 

<pre class="prettyprint">
    var rows = treeProvider.getChildren(3);
</pre>

---

#### Demo Links
#### See Also

#### See Also

> [TreeView Data Model](http://demo.realgrid.net/Demo/TreeDataModel){:target="_blank"} 참조   