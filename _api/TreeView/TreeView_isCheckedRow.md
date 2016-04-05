---
layout: apipost
title: isCheckedRow
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/isCheckedRow/
tags:
 - 체크 확인
---


#### Description

> 입력된 데이터행의 트리 아이디가 체크되어있는지 확인한다.

#### Syntax

> function isCheckedRow(rowId)

#### Parameters

> **rowId**  
> Type: Number  
> 체크되었는지 확인하려는 데이터행의 트리 아이디를 입력한다.  

#### Return value

> Type: Boolean  
> 입력된 rowId의 데이터행이 체크되었으면 true, 해제되었으면 false를 return한다.  

#### Example

<pre class="prettyprint">
    treeView.isCheckedRow(0);
</pre>

---

#### See Also

> [TreeView CheckBar Demo](http://demo.realgrid.net/Demo/TreeCheckBar){:target="_blank"} 참조    
