---
layout: apipost
title: expandGroup
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/expandGroup/
tags: 
  - 그룹 펼치기
  - 행 표시
---


#### Description

> 지정한 그룹을 펼친다(expand). 

#### Syntax

> function expandGroup(itemIndex, recursive, force)

#### Parameters

> **itemIndex**  
> Type: number  
> Grid상의 인덱스  

> **recursive**  
> Type: boolean  
> 그룹에 포함된 데이터 행들의 표시여부.

> **force**  
> Type: boolean  
> 이미 expanded 상태라도 recursive가 true일 때 자손들의 펼침여부.


#### Return value

> NONE

#### Example

<pre class="prettyprint">
    var recursive = $("#chkExpandRecursive").is(":checked");
    var force = $("#chkExpandForce").is(":checked");
    var itemIndex = grdMain.getCurrent().itemIndex;
 
    if (grdMain.isGroupItem(itemIndex)) {
        grdMain.expandGroup(itemIndex, recursive, force);
    }
</pre>



