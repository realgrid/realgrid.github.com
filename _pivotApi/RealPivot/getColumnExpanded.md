---
layout: apipost
title: getColumnExpanded
part: Objects
objectname: getColumnExpanded
directiontype: Function
permalink: /pivotApi/RealPivot/getColumnExpanded/
versions:
  - 1.0.9+
tags:
  - 컬럼
  - column
  - expanded 
  - 펼침여부
---


#### Description

 피벗 그리드에 표시되고 있는 컬럼의 펼침여부를 가져온다.      

#### Syntax

> function getColumnLabels(path)  

#### Parameters

> **path**   
> Type: Array of Value   
> 펼침 상태를 확인하려는 컬럼필드를 경로 형태로 지정한다.       

#### Return value

> Type: Boolean   
> 펼침 여부를 가져온다.       

#### Examples 

[pivot](/images/pivot/pivots2.png)

2016년 1분기의 펼침 여부 확인

<pre class="prettyprint">
var expanded = pivot.getColumnExpanded([2016,1])

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
