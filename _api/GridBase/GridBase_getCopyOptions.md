---
layout: apipost
title: getCopyOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCopyOptions/
tags:
  - clipboard
  - copy
---


#### Description

 ctrl+c를 이용해서 그리드를 복사할때 적용되는 설정을 가져온다.

#### Syntax

> function getCopyOptions()

#### Parameters

> none

#### Return value

> Type: Object  
> [CopyOptions](/api/types/CopyOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
var cpOpt = gridView.getCopyOptions();
alert(JSON.stringify(cpOpt));
</pre>

---

#### API Links

* [setCopyOptions](/api/GridBase/setCopyOptions)
* [getPasteOptions](/api/GridBase/getPasteOptions)
* [setPasteOptions](/api/GridBase/setPasteOptions)