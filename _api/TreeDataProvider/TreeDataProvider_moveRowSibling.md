---
layout: apipost
title: moveRowSibling
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/moveRowSibling/
jsonly: true
versions:
  - JS 1.0.15+
tags:
 - delta
---


#### Description

 특정 데이터행의 위치를 지정한 단계만큼 이동한다.(같은 부모의 형제간 위치 이동)  

#### Syntax

> function moveRowSibling(rowId, delta)  

#### Parameters

> **rowId**    
> Type: Number    
> 데이터 행의 트리 아이디.  

> **delta**    
> Type: Number    
> 이동하려는 상하 위치 단계값      

#### Return value

> none.

#### Examples 

<pre class="prettyprint">
treeProvider.moveRowSibling(10, -1);  //rowId가 10인 행을 같은 레벨의 형제간에 한단계 위로 이동
</pre>

---

#### Demo Links

* [Tree Move Row](http://demo.realgrid.com/Tree/TreeNodeControl){:target="_blank"}   