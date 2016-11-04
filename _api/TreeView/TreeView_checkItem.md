---
layout: apipost
title: checkItem
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/checkItem/
tags:
 - exclusive
 - 아이템 체크
---


#### Description

 입력된 아이템을 체크하거나 해제한다.

#### Syntax

> function checkItem(itemIndex, checked, exclusive, checkEvent)

#### Parameters

> **itemIndex**  
> Type: Number  
> [아이템](/api/features/Grid%20Item/)행의 index.  

> **checked**  
> Type: Boolean  
> Default: true  
> true를 입력하면 itemIndex로 입력된 아이템을 체크한다. false로 입력하면 체크를 해제한다.  

> **exclusive**  
> Type: Boolean  
> Default: false  
> true로 입력하면 체크된 다른아이템이 있는 경우 모두 해제하고 itemIndex로 입력된 아이템만 체크한다.  

> **checkEvent**  
> Type: Boolean  
> Default: true  
> onItemChecked()의 발생 여부를 지정한다.  
> ver 1.1.20부터 지원된다.     

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
treeView.checkItem(0, true, false);    
</pre>

---

#### Demo Links

* [TreeView CheckBar Demo](http://demo.realgrid.net/Demo/TreeCheckBar){:target="_blank"}    
