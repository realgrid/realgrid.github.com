---
layout: apipost
title: setShadowDomOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setShadowDomOptions/
jsonly: true
versions:
  - JS 1.1.24+
tags:
  - clipboard
  - paste
  - 붙여넣기
---


#### Description

 ShadowDom과 관련된 설정 정보를 설정한다. [ShadowDomOptions](/api/types/ShadowDomOptions/)이 설정 모델이다.

#### Syntax

> function setShadowDomOptions(options)

#### Parameters

> **options**  
> Type: object  
> [ShadowDomOptions](/api/types/ShadowDomOptions/) 모델과 같은 설정 정보. [ShadowDomOptions](/api/types/ShadowDomOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.setShadowDomOptions({
    title: "인사조회 테이블",
    ...
});
</pre>

---

#### API Links

* [getShadowDomOptions](/api/GridBase/getShadowDomOptions)

