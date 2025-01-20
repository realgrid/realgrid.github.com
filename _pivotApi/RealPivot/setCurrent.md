---
layout: apipost
title: setCurrent
part: Objects
objectname: setCurrent
directiontype: Function
permalink: /pivotApi/RealPivot/setCurrent/
versions:
  - 1.0.11+
tags:
  - current
  - 커런트
  - 위치정보
---


#### Description

 입력된 valueField, rowPath, columnPath에 해당하는 셀로 focus를 이동시킨다.        

#### Syntax

> function setCurrent(valueField, rowPath, columnPath)

#### Arguments

> **valueField**   
> Type: string   
> 값 필드를 지정한다.    
> 지정하지 않으면 첫번째 값 필드로 지정된다.

> **rowPath**
> Type: array of string
> 선택하려는 행의 경로를 지정한다.

> **columnPath**    
> type: array of string    
> 선택하려는 컬럼의 경로를 지정한다.

#### Return value
  
> None.

#### Examples 

<pre class="prettyprint">
pivot.setCurrent('valueField', ['국산','기아','대형'], [4, 10]);
</pre>

---

#### API Links

