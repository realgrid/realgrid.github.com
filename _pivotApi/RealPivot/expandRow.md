---
layout: apipost
title: expandRow
part: Objects
objectname: expandRow
directiontype: Function
permalink: /pivotApi/RealPivot/expandRow/
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

 피벗 그리드의 특정행만 expand 할때 사용한다.      

#### Syntax

> function expandRow(path)

#### Parameters

> **path**   
> Type: Array   
> expand 하고자 하는 행의 행필드의 값을 나열한다.  


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.expandRow(["TORTU"]); //1레발이 TORTU 인 행를 펼친다.  

pivot.expandRow(["TORTU", "10248"]);  //1레발이 TORTU이고 2레벨이 10248인 행를 펼친다.  
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
