---
layout: apipost
title: getGroupLevel
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/getGroupLevel/
tags: 
  - 그룹 레벨
---


#### Description

> 지정한 필드의 그룹 레벨을 반환한다.  
> 첫번째 그룹 레벨은 1이다. 그 필드로 그룹핑되지 않았다면 0을 리턴 한다.  
> 없는 필드명이 지정됐을 경우 -1이 반환된다.  

#### Syntax

> function getGroupLevel(field)

#### Parameters

> **field**  
> Type: string or number  
> 그리드의 필드명 이거나 그리드의 필드 인덱스  

#### Return value

> Type: number  
> 그룹의 레벨  

#### Example

<pre class="prettyprint">
    var idx = grdMain.getCurrent();
    if (idx.fieldIndex >= 0) {
        var level = grdMain.getGroupLevel(idx.fieldIndex);
        alert("Group level of " + idx.fieldName + ": " + level);
    }
</pre>



