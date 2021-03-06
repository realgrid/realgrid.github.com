---
layout: apipost
title: setSummaryOptions
part: Objects
objectname: setSummaryOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setSummaryOptions/
tags:
  - 요약옵션
  - 옵션
---


#### Description

 피벗 그리드의 요약에 관련된 옵션 정보들을 설정한다.    

#### Syntax

> function setSummaryOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [SummaryOptions](/pivotApi/types/SummaryOptions/)로 구성된 객체     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.setSummaryOptions({
    rowVisible: true,
    columnVisible: true
});
</pre>

---

#### API Links

* [SummaryOptions](/pivotApi/types/SummaryOptions/)   
* [getSummaryOptions](/pivotApi/RealPivot/getSummaryOptions/)   
