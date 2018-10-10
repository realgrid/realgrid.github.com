---
layout: apipost
title: expandColumnLevel
part: Objects
objectname: expandColumnLevel
directiontype: Function
permalink: /pivotApi/RealPivot/expandColumnLevel/
versions:
  - 1.0.2+
tags:
  - GroupOptions
  - 그룹옵션
  - 옵션
  - expand
  - collapse
---


#### Description

 피벗 그리드의 특정컬럼까지 expand 할때 사용한다.      

#### Syntax

> function expandColumnLevel(level)

#### Parameters

> **level**   
> Type: Number   
> -1로 지정하면 컬럼이 모두 펼쳐진다.  
> 0으로 지정하면 모든 컬럼이 접혀진다.  
> 1 이상 지정하면 그 지정한 레벨만큼 펼쳐진다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.expandColumnLevel(-1);
</pre>

---

#### API Links

* [GroupOptions](/pivotApi/types/GroupOptions/)   
* [getGroupOptions](/pivotApi/RealPivot/getGroupOptions/)   
* [expandColumnLevel](/pivotApi/RealPivot/expandColumnLevel/)   
* [expandRowLevel](/pivotApi/RealPivot/expandRowLevel/)   
* [expandColumn](/pivotApi/RealPivot/expandColumn/)   
* [expandRow](/pivotApi/RealPivot/expandRow/)   
* [collapseColumn](/pivotApi/RealPivot/collapseColumn/)   
* [collapseRow](/pivotApi/RealPivot/collapseRow/)   
