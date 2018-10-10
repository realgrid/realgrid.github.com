---
layout: apipost
title: getColumnLabels
part: Objects
objectname: getColumnLabels
directiontype: Function
permalink: /pivotApi/RealPivot/getColumnLabels/
versions:
  - 1.0.2+
tags:
  - 컬럼
  - 라벨
  - column
  - label
---


#### Description

 피벗 그리드에 표시되고 있는 컬럼의 라벨정보들을 가져온다.      

#### Syntax

> function getColumnLabels()  

#### Parameters

> None.

#### Return value

> Type: Object   
> 컬럼 라벨 정보를 가져온다.  
> 컬럼이 여러 레벨로 구성되어 있다면 자식 라벨들을 가진 계층 구조로 구성된 객체를 반환한다.     

#### Examples 

<pre class="prettyprint">
var cLabels = pivot.getColumnLabels();
</pre>

---

#### API Links

* [getRowLabels](/pivotApi/RealPivot/getRowLabels/)   
