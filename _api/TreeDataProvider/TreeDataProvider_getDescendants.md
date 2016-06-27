---
layout: apipost
title: getDescendants
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getDescendants/
---


#### Description

 모든 자손 행들의 rowId를 가져온다.  

#### Syntax

> function getDescendants (rowId)  

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

#### Return value

> Type: Array of Number.  
> 배열로 만들어진 Row Id들의 목록.  

#### Examples 

<pre class="prettyprint">
var rows = treeProvider.getDescendants(3);
</pre>

---

#### Demo Links

* [TreeView Data Model](http://demo.realgrid.net/Demo/TreeDataModel){:target="_blank"}