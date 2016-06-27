---
layout: apipost
title: collapseGroup
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/collapseGroup/
tags: 
  - 그룹 접기
  - 자손 그룹
---


#### Description

> 지정한 그룹을 접는다(collapse). 

#### Syntax

> function collapseGroup(itemIndex, recursive)

#### Parameters

> **itemIndex**  
> Type: number  
> Grid상의 인덱스  

> **recursive**  
> Type: boolean  
> 그룹에 포함된 자손 그룹의 접힘 여부.  
> true 일때 이미 collapsed된 상태라면 아무일도 하지 않는다.  

#### Return value

> NONE

#### Example

<pre class="prettyprint">
    var recursive = $("#chkCollapseRecursive").is(":checked");
    var itemIndex = gridView.getCurrent().itemIndex;
 
    if (gridView.isGroupItem(itemIndex)) {
        gridView.collapseGroup(itemIndex, recursive);
    }
</pre>



