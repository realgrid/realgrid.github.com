---
layout: apipost
title: getMobileOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getMobileOptions/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - MobileOptions
  - 모바일옵션
---


#### Description

 모바일 환경 설정과 관련된 정보들을 가져온다. [MobileOptions](/api/types/MobileOptions/)가 설정 모델이다.

#### Syntax

> function getMobileOptions()

#### Parameters

> None

#### Return value

> Type: object  
> [EditOptions](/api/types/MobileOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
var options = gridView.getMobileOptions();
</pre>

---

#### API Links

* [setMobileOptions](/api/GridBase/setMobileOptions)
