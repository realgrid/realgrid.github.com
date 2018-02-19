---
layout: apipost
title: setOptions
part: Objects
objectname: setOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setOptions/
tags:
  - 옵션
---


#### Description

 피벗 그리드의 옵션정보들을 설정한다.    

#### Syntax

> function setOptions(options)

#### Parameters

> **options**  
> Type: Objects   
> [display](/pivotApi/types/DisplayOptions/), [summary](/pivotApi/types/SummaryOptions/), [header](/pivotApi/types/HeaderOptions/) 옵션들로 구성된 객체    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    pivot.setOptions({
        display: {
            rowLabelWidth: 120,
            tooltipDelay: 1000,
            showTooltip: true,
            showLabelTooltip: true,
            showProgress: true
        }
    });
</pre>

