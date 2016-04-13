---
layout: apipost
title: setIconIndex
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/setIconIndex/
tags:
 - 아이콘 변경
 - icon change
---


#### Description

> 지정한 데이터행의 아이콘을 변경한다.   

#### Syntax

> function setIconIndex(rowId, iconIndex)   

#### Parameters

> **rowId**   
> Type: Number   
> 아이콘을 변경할 데이터행의 트리 아이디.   

> **iconIndex**   
> Type: Number   
> 새로 변경할 아이콘 인덱스.   

#### Return value

> None.   

#### Examples 

<pre class="prettyprint">
    treeProvider.setIconIndex(1, 2);
</pre>

---

#### See Also

> [TreeView Editing](http://demo.realgrid.net/Demo/TreeEditing){:target="_blank"} 참조   