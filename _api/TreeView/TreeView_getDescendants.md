---
layout: apipost
title: getDescendants
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/getDescendants/
tags:
 - 자손행 itemIndex
 - 자손행 아이템인덱스
---


#### Description

> 자손행의 [아이템](/api/features/Grid%20Item/)의 index배열을 가져온다.

#### Syntax

> function getDescendants(itemIndex)

#### Parameters

> **itemIndex**  
> Type: Number  
> 자손행을 가져오려는 부모행의 index를 입력한다.  

#### Return value

> Type: Array of Number

#### Examples 

<pre class="prettyprint">
    treeView.getDescendants(0);    
</pre>

