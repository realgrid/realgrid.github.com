---
layout: apipost
title: expandRowLevel
part: Objects
objectname: expandRowLevel
directiontype: Function
permalink: /pivotApi/RealPivot/expandRowLevel/
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

> function expandRowLevel(level, expandDescentants)

#### Parameters

> **level**   
> Type: Number   
> -1로 지정하면 행이 모두 펼쳐진다.  
> 0으로 지정하면 모든 행이 접혀진다.  
> 1 이상 지정하면 그 지정한 레벨만큼 펼쳐진다.    

> **expandDescentants**    
> Type: Boolean | undefined    
> 지정된 level의 자식을 제외한 자손의 펼침상태를 지정한다.    
> `true`로 지정하면 접힌 행을 펼쳤을때 하위 Level이 모두 펼쳐진 상태로 표시되고 `false`로 지정하면 모두 접힌 상태로 표시된다.    
> 지정하지 않으면 이전상태를 유지한다.    


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.expandRowLevel(-1);
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
