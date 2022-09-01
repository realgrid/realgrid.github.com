---
layout: apipost
title: getValueNames
part: Objects
objectname: getValueNames
directiontype: Function
permalink: /pivotApi/RealPivot/getValueNames/
versions:
  - 1.0.9+
tags:
  - 컬럼
  - 필드
  - 값
  - values
  - column
  - field
---


#### Description

 피벗 그리드에 표시되고 있는 값 필드의 목록을 가져온다.

#### Syntax

> function getValueNames(extended);  

#### Parameters

> **extended**   
> Type: Boolean  
> true이면 이름뿐만이 아니라 피봇필드정보를 가져온다.  

#### Return value

> Type: Array Of String || Array Of [PivotField](/pivotApi/types/PivotField/)  
> 피벗그리드의 값 필드명이나 피봇필드를 가져온다.        

#### Examples 

[pivot](/images/pivot/pivots1.png)

<pre class="prettyprint">
var values = pivot.getValueNames();

//결과 values
['차량가격', '판매수량']
</pre>

---


