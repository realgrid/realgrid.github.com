---
layout: apipost
title: getOptions
part: Objects
objectname: getOptions
directiontype: Function
permalink: /pivotApi/RealPivot/getOptions/
tags:
  - 옵션설정
---


#### Description

 피벗 그리드의 옵션정보들을 가져온다.    

#### Syntax

> function getOptions() 

#### Parameters

> None.

#### Return value

> Type: Objects   
> [DisplayOptions](/pivotApi/types/DisplayOptions/), [SummaryOptions](/pivotApi/types/SummaryOptions/), [HeaderOptions](/pivotApi/types/HeaderOptions/)들로 구성된 객체를 반환한다.      

#### Examples 

<pre class="prettyprint">
    var options = pivot.getOptions();
</pre>

