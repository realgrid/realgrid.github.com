---
layout: apipost
title: setSetupOptions
part: Objects
objectname: setSetupOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setSetupOptions/
versions:
  - 1.0.9+
tags:
  - 옵션
---


#### Description

 피벗 그리드의 설정창의 옵션을 설정한다.    

#### Syntax

> function setSetupOptions(options)

#### Parameters

#### Syntax

> function setDisplayOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [SetupOptions](/pivotApi/types/SetupOptions/)로 구성된 객체   

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.setSetupOptions({
    defaultExpression: "max",
    filterOperation: "or"
});
</pre>

---

#### API Links

* [getSetupOptions](/pivotApi/RealPivot/getSetupOptions/)   