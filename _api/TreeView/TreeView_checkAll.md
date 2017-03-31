---
layout: apipost
title: checkAll
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/checkAll/
tags:
 - 전체 체크
---


#### Description

 트리뷰의 모든 아이템에 체크 또는 해제한다.

#### Syntax

> function checkAll(checked, checkEvent)

#### Parameters

> **checked**  
> Type: boolean  
> Default: true  
> 입력하지 않으면 true이며 모든 아이템을 체크한다. false로 입력하면 모든 아이템의 체크 박스를 해제한다.  

> **checkEvent**  
> Type: Boolean  
> Default: true  
> onItemAllChecked()의 발생 여부를 지정한다.  
> ver 1.1.20부터 지원된다.     

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
treeView.checkAll(true);
</pre>

---

#### Demo Links

* [TreeView CheckBar Demo](http://demo.realgrid.com/Tree/TreeCheckBox){:target="_blank"}   
