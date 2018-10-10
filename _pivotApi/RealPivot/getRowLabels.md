---
layout: apipost
title: getRowLabels
part: Objects
objectname: getRowLabels
directiontype: Function
permalink: /pivotApi/RealPivot/getRowLabels/
versions:
  - 1.0.2+
tags:
  - 로우
  - 라벨
  - row
  - label
---


#### Description

 피벗 그리드에 표시되고 있는 행의 라벨정보들을 가져온다.      

#### Syntax

> function getRowLabels()  

#### Parameters

> None.

#### Return value

> Type: Object   
> 행 라벨 정보를 가져온다.  
> 행이 여러 레벨로 구성되어 있다면 자식 라벨들을 가진 계층 구조로 구성된 객체를 반환한다.     

#### Examples 

<pre class="prettyprint">
var rLabels = pivot.getRowLabels();
</pre>

---

#### API Links

* [getColumnLabels](/pivotApi/RealPivot/getColumnLabels/)   
