---
layout: apipost
title: collapseRow
part: Objects
objectname: collapseRow
directiontype: Function
permalink: /pivotApi/RealPivot/collapseRow/
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

 피벗 그리드의 특정행만 collapse 할때 사용한다.      

#### Syntax

> function collapseRow(path)

#### Parameters

> **path**   
> Type: Array   
> collapse 하고자 하는 행의 행필드의 값을 나열한다.  


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.collapseRow(["TORTU"]); //1레발이 TORTU 인 행를 접는다.  

pivot.collapseRow(["TORTU", "10248"]);  //1레발이 TORTU이고 2레벨이 10248인 행를 접는다.  
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
