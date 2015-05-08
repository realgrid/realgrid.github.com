---
layout: apipost
title: isCheckedItem
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/isCheckedItem/
---


#### Description

> 입력된 itemIndex가 체크되어있는지 확인한다.

#### Syntax

> function isCheckedItem(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 체크되었는지 확인하려는 데이터행의 itemIndex를 입력한다.  

#### Return value

> Type: Boolean  
> 체크가 되었으면 true, 해제되었으면 false를 리턴한다.  

#### Example

<pre class="prettyprint">
    treeMain.isCheckedItem(0);    
</pre>

