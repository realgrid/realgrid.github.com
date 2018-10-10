---
layout: apipost
title: collapseColumn
part: Objects
objectname: collapseColumn
directiontype: Function
permalink: /pivotApi/RealPivot/collapseColumn/
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

 피벗 그리드의 특정컬럼만 collapse 할때 사용한다.      

#### Syntax

> function collapseColumn(path)

#### Parameters

> **path**   
> Type: Array   
> collapse 하고자 하는 컬럼의 컬럼필드의 값을 나열한다.  


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.collapseColumn([1996]); //1레발이 1996 인 컬럼을 접는다.  

pivot.collapseColumn([1996, 4]);  //1레발이 1996이고 2레벨이 4인 컬럼을 접는다.  
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
