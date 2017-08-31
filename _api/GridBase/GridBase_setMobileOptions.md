---
layout: apipost
title: setMobileOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setMobileOptions/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - editing
  - edit Option
  - 편집옵션
---


#### Description

 그리드 편집 방식과 관련된 정보들을 재설정한다. [EditOptions](/api/types/EditOptions/)이 설정 모델이다.

#### Syntax

> function setMobileOptions(options)

#### Parameters

> **options**  
> Type: Object  
> [MobileOptions](/api/types/MobileOptions/) 모델과 같은 설정 정보. [MobileOptions](/api/types/MobileOptions/) 중 변경하고자 하는 값들만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.setMobileOptions({
    longTapDuration: 500,
    doubleTapInterval: 300,
    tapThreshold: 4
});
</pre>

---

#### API Links

* [getMobileOptions](/api/GridBase/getMobileOptions) 