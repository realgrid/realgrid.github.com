---
layout: apipost
title: getAncestors
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/getAncestors/
tags:
 - 조상행 가져오기
 - 조상 가져오기
---


#### Description

> 모든 조상 행들의 [아이템](/api/features/Grid%20Item/)의 index를 가져온다.

#### Syntax

> function getAncestors(itemIndex, includeRoot)  

#### Parameters

> **itemIndex**  
> Type: Number   
> [아이템](/api/features/Grid%20Item/)행의 index.

> **includeRoot**  
> Type: Boolean    
> Default : true  
> 숨겨진 최상위 루트행의 index값을 포함하여 결과값으로 반환한다.  

#### Return value

> Type: Array of Number.
> 배열로 만들어진 ItemIndex들의 목록.

#### Example

<pre class="prettyprint">
   var items = treeView.getAncestors(5, false);  
</pre>

