---
layout: apipost
title: getCurrent
part: Objects
objectname: getCurrent
directiontype: Function
permalink: /pivotApi/RealPivot/getCurrent/
versions:
  - 1.0.9+
tags:
  - current
  - 커런트
  - 위치정보
---


#### Description

 포커스 셀의 위치정보를 가져온다.        

#### Syntax

> function getCurrent()

#### Arguments

> None.

#### Return value
  
> Type: [CellIndex](/pivotApi/types/CellIndex/)   
> 포커스가 위치한 곳의 columns, rows의 객체 정보, valueField    

#### Examples 

<pre class="prettyprint">
var current = pivot.getCurrent();
</pre>

---

#### API Links

