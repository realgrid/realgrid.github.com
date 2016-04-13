---
layout: apipost
title: isCheckable
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/isCheckable/
tags:
  - check
  - checkable
---


#### Description

> [CheckBar](/api/types/CheckBar/)에 체크가 가능한 상태이면 true를 반환한다.  

#### Syntax

> function isCheckable(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> Grid Item의 index이다.  

#### Return value

> Type: Boolean  
> CheckBar에 체크가 가능한 상태이면 true를 반환한다.  

##### Examples 

<pre class="prettyprint">
    if (gridView.isCheckable(0)) {
        alert("체크 가능");
    }
</pre>

#### See Also
> [setCheckable](/api/GridBase/setCheckable), [setCheckableExpression](/api/GridBase/setCheckableExpression)