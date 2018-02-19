---
layout: apipost
title: setSummaryOptions
part: Objects
objectname: setSummaryOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setSummaryOptions/
tags:
  - 합계옵션
  - 소게옵션
  - 옵션
---


#### Description

 피벗 그리드의 Summary옵션정보들을 설정한다.    

#### Syntax

> function setSummaryOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [summary](/pivotApi/types/SummaryOptions/)옵션들로 구성된 객체     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    pivot.setSummaryOptions({
        rowVisible: true,
        columnVisible: true
    });
</pre>

