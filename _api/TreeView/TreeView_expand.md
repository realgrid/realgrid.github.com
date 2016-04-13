---
layout: apipost
title: expand
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/expand/
tags:
 - 확장
---


#### Description

> 입력된 아이템을 확장한다.

#### Syntax

> function expand(itemIndex, recursive, force)

#### Parameters

> **itemIndex**  
> Type: Number  
> 확장하려는 [아이템](/api/features/Grid%20Item/)행의 index를 입력한다.  

> **recursive**  
> Type: Boolean  
> Default: false  
> true를 입력하면 입력된 아이템의 자식아이템까지 모두 확장한다.  

> **force**  
> Type: Boolean  
> Default: false  
> true를 입력하면 확장되어 있는 아이템의 닫혀있는 자식아이템을 모두 확장한다.

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    treeView.expand(0,true);
</pre>

---

#### See Also

> [TreeView Data Model](http://demo.realgrid.net/Demo/TreeDataModel){:target="_blank"} 참조    
