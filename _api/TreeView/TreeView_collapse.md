---
layout: apipost
title: collapse
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/collapse/
tags:
 - 축소
---


#### Description

> 

#### Syntax

> function collapse(itemIndex, recursive)

#### Parameters

> **itemIndex**  
> Type: Number  
> 축소할 [아이템](/api/features/Grid%20Item/)행의 index이다.  

> **recursive**  
> Type: Boolean  
> Default: false  
> true로 입력하면 펼쳐진 자식행이 있는 경우 모두 축소 시킨다.  

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    treeView.collapse(0,true);
</pre>

---

#### See Also

> [TreeView Data Model](http://demo.realgrid.net/Demo/TreeDataModel){:target="_blank"} 참조    
