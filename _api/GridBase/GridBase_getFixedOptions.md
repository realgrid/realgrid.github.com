---
layout: apipost
title: getFixedOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getFixedOptions/
tags:
  - fixed
  - options
---


#### Description

> 그리드 고정 영역에 관한 설정 정보들을 가져온다. [FixedOptions](/api/types/FixedOptions/)가 설정 모델이다.

#### Syntax

> function getFixedOptions()

#### Parameters

> None

#### Return value

> Type: object  
> [FixedOptions](/api/types/FixedOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Example

<pre class="prettyprint">
var options = gridView.getFixedOptions();
if (options) {
	alert(JSON.stringify(options));
}
</pre>

#### See Also
> [setFixedOptions](/api/GridBase/setFixedOptions)