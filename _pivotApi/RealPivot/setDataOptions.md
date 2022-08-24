---
layout: apipost
title: setDataOptions
part: Objects
objectname: setDataOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setDataOptions/
versions:
  - 1.0.3+
tags:
  - DataOptions
  - 옵션
---


#### Description

 피벗 그리드의 Data옵션정보들을 설정한다.    

#### Syntax

> function setDataOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [DataOptions](/pivotApi/types/DataOptions/)로 구성된 객체     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.setDataOptions({
    trimOutputNumber: true,
    defaultExpression: "sum"
});
</pre>

---

#### API Links

* [DataOptions](/pivotApi/types/DataOptions/)   
* [getDataOptions](/pivotApi/RealPivot/getDataOptions/)   
