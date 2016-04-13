 ---
layout: apipost
title: checkRows
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/checkRows/
tags:
 - 데이터행 아이디 체크
 - rowId check
---


#### Description

> 입력된 rowIds에 해당하는 데이터행을 체크하거나 해제한다.

#### Syntax

> function checkRows(rowIds, checked)  

#### Parameters

> **rowIds**  
> Type: Array of Number  
> 체크하거나 해제할 데이터행의 트리 아이디 배열이다.  

> **checked**  
> Type: Boolean  
> Default: true  
> true로 입력하면 rowIds로 입력한 데이터행을 모두체크한다. false로 입력하면 모두 해제한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    treeView.checkRows([2,3,4],true);
</pre>

---

#### See Also

> [TreeView CheckBar Demo](http://demo.realgrid.net/Demo/TreeCheckBar){:target="_blank"} 참조    
