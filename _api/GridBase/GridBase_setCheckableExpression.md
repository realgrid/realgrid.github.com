---
layout: apipost
title: setCheckableExpression
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCheckableExpression/
tags:
  - check
  - checkable
  - 체크
  - 체크조건
---


#### Description

 [CheckBar](/api/types/CheckBar/)에 checkableExpression 설정과 적용을 동시에 수행한다.

#### Syntax

> function setCheckableExpression(expression, apply)

#### Parameters

> **expression**  
> Type: String  
> 체크 가능 여부의 수식을 지정한다.  

> **apply**  
> Type: Boolean  
> Default: true  
> Checkable 의 즉시 적용여부  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.setCheckableExpression("row < 10", true);
/* itemIndex가 10이하 인경우만 체크 가능하도록 한다.*/
/* dataRow 인 경우는  "dataRow < 10"*/
</pre>

---

#### API Links

* [CheckBar](/api/types/CheckBar)
* [setCheckable](/api/GridBase/setCheckable)
* [resetCheckables](/api/GridBase/resetCheckables)
* [applyCheckables](/api/GridBase/applyCheckables)