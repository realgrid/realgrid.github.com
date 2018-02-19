---
layout: apipost
title: setDisplayOptions
part: Objects
objectname: setDisplayOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setDisplayOptions/
tags:
  - 디스플레이옵션
  - 옵션
---


#### Description

 피벗 그리드의 Display옵션정보들을 설정한다.    

#### Syntax

> function setDisplayOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [display](/pivotApi/types/DisplayOptions/)옵션들로 구성된 객체     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    pivot.setDisplayOptions({
        rowLabelWidth: 120,
        tooltipDelay: 1000,
        showTooltip: true,
        showLabelTooltip: true,
        showProgress: true
    });
</pre>

