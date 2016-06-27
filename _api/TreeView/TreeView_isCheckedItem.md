---
layout: apipost
title: isCheckedItem
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/isCheckedItem/
tags:
 - 체크 확인
---


#### Description

> 입력된 [아이템](/api/features/Grid%20Item/)행의 index가 체크되어있는지 확인한다.

#### Syntax

> function isCheckedItem(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 체크되었는지 확인하려는 [아이템](/api/features/Grid%20Item/)행의 index를 입력한다.  

#### Return value

> Type: Boolean  
> 체크가 되었으면 true, 해제되었으면 false를 리턴한다.  

#### Example

<pre class="prettyprint">
    treeView.isCheckedItem(0);    
</pre>

---
#### See Also

> [TreeView CheckBar Demo](http://demo.realgrid.net/Demo/TreeCheckBar){:target="_blank"} 참조    
