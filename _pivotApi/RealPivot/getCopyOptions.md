---
layout: apipost
title: getCopyOptions
part: Objects
objectname: getCopyOptions
directiontype: Function
permalink: /pivotApi/RealPivot/getCopyOptions/
versions:
  - 1.0.1+
tags:
  - 복사옵션
  - copyOptions
  - 옵션
---


#### Description

 피벗 그리드에 설정된 Copy옵션정보들을 가져온다.    

#### Syntax

> function getCopyOptions()  

#### Parameters

> None.

#### Return value

> Type: Object   
> [CopyOptions](/pivotApi/types/CopyOptions/)들로 구성된 객체를 반환한다.     

#### Examples 

<pre class="prettyprint">
var options = pivot.getCopyOptions();
</pre>

---

#### API Links

* [CopyOptions](/pivotApi/types/CopyOptions/)   
* [setCopyOptions](/pivotApi/RealPivot/setCopyOptions/)   