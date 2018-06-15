---
layout: apipost
title: setHeaderOptions
part: Objects
objectname: setHeaderOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setHeaderOptions/
tags:
  - 헤더옵션
  - 옵션
---


#### Description

 피벗 그리드의 Header옵션정보들을 설정한다.    

#### Syntax

> function setHeaderOptions(options)

#### Parameters

> **options**  
> Type: Object   
> [HeaderOptions](/pivotApi/types/HeaderOptions/)으로 구성된 객체를 지정한다.   

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    pivot.setHeaderOptions({
        titleVisible: true, 
        titleHeight: 50
    });
</pre>

---

#### API Links

* [HeaderOptions](/pivotApi/types/HeaderOptions/)   
* [setHeaderOptions](/pivotApi/RealPivot/setHeaderOptions/)   