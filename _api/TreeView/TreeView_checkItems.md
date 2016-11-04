---
layout: apipost
title: checkItems
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/checkItems/
tags:
 - 아이템 체크
 - 다행 체크
---


#### Description

 입력된 아이템들을 체크하거나 해제한다.

#### Syntax

> function checkItems(items, checked, checkEvent)  

#### Parameters

> **items**  
> Type: Array of Number  
> 체크하거나 해제할 [아이템](/api/features/Grid%20Item/)행의 index 배열이다.  

> **checked**  
> Type: Boolean  
> Default: true  
> true로 입력하면 입력된 items배열에 포함되는 아이템들을 체크하거나 해제한다.  

> **checkEvent**  
> Type: Boolean  
> Default: true  
> onItemsChecked()의 발생 여부를 지정한다.  
> ver 1.1.20부터 지원된다.     


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
treeView.checkItems( [ 0, 1 ], true );
</pre>

---

#### Demo Links

* [TreeView CheckBar Demo](http://demo.realgrid.net/Demo/TreeCheckBar){:target="_blank"}   
