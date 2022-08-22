---
layout: apipost
title: onSorting
part: Objects
objectname: onSorting
directiontype: Callback
permalink: /pivotApi/RealPivot/onSorting/
versions:
  - 1.0.9+
tags:
  - sort
  - sorting 
  - 소트
  - 소팅  
---


#### Description

 툴팁이 표시될때 발생하는 콜백 함수이다. return 되는 값이 툴팁에 표시된다. 아무것도 return 하지 않으면 데이터 셀 값이 툴팁에 표시된다.          

#### Syntax

> function onSorting(pivot, type, oldConfig, newConfig)

#### Arguments

> **pivot**   
> Type: PivotView      
> pivotView 컨트롤     

> **type**   
> Type: String      
> 행필드, 컬럼필드중 어느것이 정렬되었는지 'row', 'column'이 넘어온다.       


> **oldConfig**   
> Type: Object   
> 새로 정렬하기 전의 필드명과 소트방향이 넘어온다.       

> **newConfig**   
> Type: Object    
> 새로이 정렬된의 필드명과 소트방향이 넘어온다.       

#### Return

> None.

#### Examples 

<pre class="prettyprint">
pivot.onSorting = function (grid, type, oldConfig, newConfig) {
  console.log(type, oldConfig, newConfig);
  return type !== "column";
}
</pre>

---

#### API Links

* [setPivotFields](/pivotApi/RealPivot/setPivotFields/)   
