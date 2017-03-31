---
layout: apipost
title: addChildRow
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/addChildRow/
tags:
 - values
 - iconIndex
 - hasChildren
---


#### Description

 지정한 트리 행의 자식 행을 추가한다. 

#### Syntax

> function addChildRow(rowId, values, iconIndex, hasChildren)

#### Parameters

> **rowId**  
> Type: Number  
> Parent 행의 아이디.  

> **values**  
> Type: Array\|Object  
> 추가할 행의 필드 값 배열 또는 Object.  

> **iconIndex**  
> Type: Number  
> 트리 행에 표시할 아이콘 인덱스.  

> **hasChildren**  
> Type: Boolean  
> true면 자식이 있는 것으로 표시.  

#### Return value

> Type: Number  
> 새로 추가된 행의 트리 아이디.  

#### Examples 

<pre class="prettyprint">
var childId = treeProvider.addChildRow(3, [], 0, true);
</pre>

---

#### Demo Links

* [TreeView Editing](http://demo.realgrid.com/Tree/TreeEditing){:target="_blank"}  
