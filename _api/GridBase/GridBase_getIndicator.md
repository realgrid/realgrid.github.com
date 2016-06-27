---
layout: apipost
title: getIndicator
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getIndicator/
tags:
  - options
  - indicator
---


#### Description

> 그리드 Indicator와 관련된 설정 정보들을 가져온다. [Indicator](/api/types/Indicator/)가 설정 모델이다.

#### Syntax

> function getIndicator()

#### Parameters

> None

#### Return value

> Type: object  
> [Indicator](/api/types/Indicator/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Example

<pre class="prettyprint">
var options = gridView.getIndicator();
if (options) {
	JSON.stringify(options);
}
</pre>

#### See Also
> [setIndicator](/api/GridBase/setIndicator)