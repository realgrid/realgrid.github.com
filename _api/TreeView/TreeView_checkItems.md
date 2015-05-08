---
layout: apipost
title: checkItems
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/checkItems/
---


#### Description

> 입력된 아이템들을 체크하거나 해제한다.

#### Syntax

> function checkItems(items, checked)  

#### Parameters

> **items**  
> Type: Array of Number  
> 체크하거나 해제할 아이템 배열이다.  

> **checked**  
> Type: Boolean  
> Default: true  
> true로 입력하면 입력된 items배열에 포함되는 아이템들을 체크하거나 해제한다.  


#### Return value

> None.

#### Example

<pre class="prettyprint">
    treeMain.checkItems([0,1],true);
</pre>

