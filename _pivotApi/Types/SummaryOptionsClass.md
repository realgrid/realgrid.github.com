---
layout: apipost
title: SummaryOptions
part: Types
typename: Classes
order: SummaryOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/SummaryOptions/
tags: 
  - SummaryOptions
  - 써머리옵션
  - 요약옵션
---

#### Description

화면에 표시되는 요약영역과 관련된 옵션을 설정하는 모델이다.  

#### Properties

> **columnVisible**  
> Type: Boolean   
> Default: true       
> 컬럼 전체 요약 영역의 표시여부를 지정한다.    

> **rowVisible**  
> Type: Boolean   
> Default: true       
> 행의 전체 요약 영역의 표시여부를 지정한다.    

> **columnGroupVisible**  
> Type: Boolean   
> Default: true       
> 컬럼 그룹 요약 영역의 표시여부를 지정한다.    

> **rowGroupVisible**  
> Type: Boolean   
> Default: true       
> 행 그룹 요약 영역의 표시여부를 지정한다.    

> **columnPosition**  
> Type: String   
> Default: [SummaryPosition](/pivotApi/types/SummaryPosition)\.FIRST       
> 컬럼의 요약이 표시되는 위치를 지정한다.    

> **rowPosition**  
> Type: String   
> Default: [SummaryPosition](/pivotApi/types/SummaryPosition)\.FIRST       
> 행의 요약이 표시되는 위치를 지정한다.    

> **columnTotalText**  
> Type: String   
> Default: "전체 요약"       
> 컬럼 요약 라벨에 표시될 텍스트를 지정한다.    

> **rowTotalText**  
> Type: String   
> Default: "전체 요약"       
> 행의 요약 라벨에 표시될 텍스트를 지정한다.    


#### Examples   

<pre class="prettyprint">
pivot.setSummaryOptions({
	columnVisible: true,
    rowVisible: false,
    columnGroupVisible: false,
    rowGroupVisible: false,
    columnPosition: "last",
    rowPosition: "first"
}}
</pre>

---

#### API Links

* [getSummaryOptions](/pivotApi/RealPivot/getSummaryOptions/)   
* [setSummaryOptions](/pivotApi/RealPivot/setSummaryOptions/)   

