---
layout: apipost
title: onTooltip
part: Objects
objectname: onTooltip
directiontype: Callback
permalink: /pivotApi/RealPivot/onTooltip/
tags:
  - tooltip
  - 툴팁
  - 툴팁 콜백  
---


#### Description

 툴팁이 표시될때 발생하는 콜백 함수이다. return 되는 값이 툴팁에 표시된다. 아무것도 return 하지 않으면 데이터 셀 값이 툴팁에 표시된다.          

#### Syntax

> function onTooltip(pivot, index, s)

#### Arguments

> **pivot**  
> Type: PivotView     
> pivotView 컨트롤    

> **index**  
> Type: Object  
> 툴팁이 표시되는 위치의 columns, rows 객체와 valueField    

> **s**  
> Type: String   
> 컬럼라벨, 값, 열, 행, 건수 정보   

#### Return

> Type: String  
> 툴팁에 표시할 값.    

#### Examples 

<pre class="prettyprint">
pivot.onTooltip = function (pivot, type, s) {
    return "new tooltip<br/>" + s; 
}
</pre>

