---
layout: apipost
title: checkRow
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/checkRow/
tags:
 - 데이터행 아이디 체크
 - rowId check
---


#### Description

 입력된 rowId에 해당하는 아이템을 체크하거나 해제한다.  

#### Syntax

> function checkRow(rowId, checked, exclusive, checkEvent)  

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

> **checked**  
> Type: Boolean  
> Default: true  
> true로 입력을 하면 입력된 rowId의 데이터행을 체크한다. false로 입력하면 해제한다.  

> **exclusive**  
> Type: Boolean  
> Default: false  
> true로 입력하면 체크된 다른 아이템이 있는 경우 체크를 해제하고 입력된 rowId만 체크한다.  

> **checkEvent**  
> Type: Boolean  
> Default: true  
> onItemChecked()의 발생 여부를 지정한다.  
> ver 1.1.20부터 지원된다.   

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
treeView.checkItem( 2, true, false );
</pre>

---

#### Demo Links

* [TreeView CheckBar Demo](http://demo.realgrid.net/Demo/TreeCheckBar){:target="_blank"}    
