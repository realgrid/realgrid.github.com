---
layout: apipost
title: getCopyOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCopyOptions/
---


#### Description

> ctrl+c를 이용해서 그리드를 복사할때 적용되는 설정을 가져온다.

#### Syntax

> function getCopyOptions()

#### Parameters

> none

#### Return value

> Type: Object  
> [CopyOptions](/api/types/CopyOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Example

<pre class="prettyprint">
    cpOpt = grdMain.getCopyOptions();
</pre>
