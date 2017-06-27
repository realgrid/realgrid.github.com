---
layout: apipost
title: getShadowDomOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getShadowDomOptions/
jsonly: true
versions:
  - JS 1.1.24+
tags:
    - 웹접근성
    - 시각장애인지원
    - ShadowDom
    - option
---


#### Description

 ShadowDom과 관련된 설정 정보들을 가져온다. [ShadowDomOptions](/api/types/ShadowDomOptions/)이 설정 모델이다.

#### Syntax

> function getShadowDomOptions()

#### Parameters

> None

#### Return value

> Type: object  
> [ShadowDomOptions](/api/types/ShadowDomOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
var options = gridView.getShadowDomOptions();
if (options) {
	alert(JSON.stringify(options))
};
</pre>

---

#### API Links

* [setShadowDomOptions](/api/GridBase/setShadowDomOptions)