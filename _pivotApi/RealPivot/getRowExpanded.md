---
layout: apipost
title: getRowExpanded
part: Objects
objectname: getRowExpanded
directiontype: Function
permalink: /pivotApi/RealPivot/getRowExpanded/
versions:
  - 1.0.9+
tags:
  - 행
  - row
  - 펼침여부
  - expanded 
---


#### Description

 피벗 그리드에 표시되고 있는 행의 펼침여부를 가져온다.      

#### Syntax

> function getRowExpanded(path)  

#### Parameters

> **path**   
> Type: Array of Value   
> 펼침 상태를 확인하려는 행필드를 경로 형태로 지정한다.       

#### Return value

> Type: Boolean   
> 펼침 여부를 가져온다.       

#### Examples 

[pivot](/images/pivot/pivots3.png)

국산, 기야의 펼침 여부 확인

<pre class="prettyprint">
var expanded = pivot.getRowExpanded(['국산','기아'])

//결과 expanded
false
</pre>

---

#### API Links

* [expandColumnLevel](/pivotApi/RealPivot/expandColumnLevel/)   
* [expandRowLevel](/pivotApi/RealPivot/expandRowLevel/)   
* [expandColumn](/pivotApi/RealPivot/expandColumn/)   
* [expandRow](/pivotApi/RealPivot/expandRow/)   
* [collapseColumn](/pivotApi/RealPivot/collapseColumn/)   
* [collapseRow](/pivotApi/RealPivot/collapseRow/)   
