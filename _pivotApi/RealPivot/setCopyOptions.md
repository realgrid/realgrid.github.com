---
layout: apipost
title: setCopyOptions
part: Objects
objectname: setCopyOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setCopyOptions/
versions:
  - 1.0.1+
tags:
  - 복사옵션
  - copyOptions
  - 옵션
---


#### Description

 피벗 그리드의 Copy옵션정보들을 설정한다.    

#### Syntax

> function setCopyOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [CopyOptions](/pivotApi/types/CopyOptions/)로 구성된 객체     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.setCopyOptions({
    copyDisplayText: true
});
</pre>

---

#### API Links

* [CopyOptions](/pivotApi/types/CopyOptions/)   
* [getCopyOptions](/pivotApi/RealPivot/getCopyOptions/)   
