---
layout: apipost
title: getParent
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getParent/
---


#### Description

 지정한 데이터 행의 부모 rowId를 가져온다.  

#### Syntax

> function getParent(rowId)  

#### Parameters

> **rowId**  
> Type: Number  
> 데이터 행의 트리 아이디.  

#### Return value

> Type: Number.  
> 부모 행의 Row Id.  

#### Examples 

<pre class="prettyprint">
    var row = treeProvider.getParent(10);
</pre>

---

#### Demo Links

* [TreeView Editing](http://demo.realgrid.com/Tree/TreeEditing){:target="_blank"}   
