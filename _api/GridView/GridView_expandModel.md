---
layout: apipost
title: expandModel
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/expandModel/
tags: 
  - model
  - 자손 그룹 펼침
---


#### Description

> 지정한 그룹아이템 모델을 펼친다. recursive를 true로 하면 그룹에 포함된 자손 그룹도 펼친 상태가 된다.

#### Syntax

> function expandModel(model, recursive, force)

#### Parameters

> **model**  
> Type: Object  
> 펼치려는 그룹아이템 모델을 입력한다.  

> **recursive**  
> Type: boolean  
> Default: false  
> true로 하면 그룹에 포함된 자손 그룹도 펼친 상태가 된다.

> **force**  
> Type: boolean  
> Default: false  
> true로 하면 이미 expanded 상태라도 recursive가 true일 때 자손들을 펼친다.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    var recursive = $("#chkExpandRecursive").is(":checked");
    var force = $("#chkExpandForce").is(":checked");
	var itemIndex = gridView.getCurrent().itemIndex;
	var group = gridView.getModelAs(itemIndex, RealGrids.ItemType.GROUP);
	if (group) {
	    gridView.expandModel(group, recursive, force);
</pre>

---

#### Demo Links

> [ItemModelApi](http://demo.realgrid.com/Demo/ItemModelApi){:target="_blank"} 참조