---
layout: apipost
title: getAncestors
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getAncestors/
tags:
 - 조상
---


#### Description

> 모든 조상 행들의 rowId를 가져온다.  

#### Syntax

> function getAncestors(rowId)  

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

#### Return value

> Type: Array of Number.  
> 배열로 만들어진 Row Id들의 목록.  

#### Example

<pre class="prettyprint">
    var rows = treeProvider.getAncestors(22);
</pre>

---
#### See Also

> [TreeView Data Model](http://demo.realgrid.net/Demo/TreeDataModel){:target="_blank"} 참조   