---
layout: apipost
title: checkChildren
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/checkChildren/
tags:
 - 자식행 체크
 - checked
 - recursive
 - visibleOnly
---


#### Description

 입력된 행의 자식 행들을 체크하거나 해제한다.

#### Syntax

> function checkChildren(itemIndex, checked, recursive, visibleOnly, checkableOnly, checkEvent)

#### Parameters

> **itemIndex**  
> Type: Number  
> 부모행의 [ItemModel](/api/features/Grid%20Item/) index.  

> **checked**  
> Type: Boolean  
> Default: true  
> true이면 체크하고 false이면 해제한다.  

> **recursive**  
> Type: Boolean  
> Default: false  
> 자식행에 자식이 있는 경우 체크 또는 해제한다.  

> **visibleOnly**  
> Type: Boolean  
> Default: true  
> true로 입력하면 화면에 펼쳐진 자식행을 체크또는 해제하고 false로 입력하면 전체 자식행을 체크또는 해제한다.  

> **checkableOnly**  
> Type: Boolean  
> Default: true  
> true 이면 체크 가능한 상태인 것들만 체크 한다.  

> **checkEvent**  
> Type: Boolean  
> Default: true  
> onItemChecked()의 발생 여부를 지정한다.  
> ver 1.1.20부터 지원된다.   

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
treeView.checkChildren(0,true,true,false); // 0번째 부모행의 모든 자식행을 체크한다.
</pre>

---

#### Demo Links

* [TreeView CheckBar Demo](http://demo.realgrid.net/Demo/TreeCheckBar){:target="_blank"}    
