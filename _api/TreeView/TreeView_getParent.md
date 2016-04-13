---
layout: apipost
title: getParent
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/getParent/
tags:
 - 부모행 itemIndex
 - 부모행 아이템인덱스
---


#### Description

> 부모행의 [아이템](/api/features/Grid%20Item/)의 index배열을 가져온다.

#### Syntax

> function getParent(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 자식행의 [아이템](/api/features/Grid%20Item/)의 index를 입력한다.  

#### Return value

> Type: Number  
> 부모행의 itemIndex이다.  

##### Examples 

<pre class="prettyprint">
    treeView.getParent(2);
</pre>

