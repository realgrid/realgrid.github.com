---
layout: apipost
title: getChildren
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/getChildren/
tags:
 - 자식행 itemIndex
 - 자식행 아이템인덱스
---


#### Description

> 자식행의 [아이템](/api/features/Grid%20Item/)의 index배열을 가져온다.

#### Syntax

> function getChildren(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 자식행을 가져오려는 부모행의 itemIndex를 입력한다.  

#### Return value

> Type: Array of Number  
> 자식행의 itemIndex배열.  

#### Example

<pre class="prettyprint">
    treeView.getChildren(0);
</pre>

