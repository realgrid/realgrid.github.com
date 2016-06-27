---
layout: apipost
title: getHeader
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getHeader/
tags:
  - header
  - options
---


#### Description

> 그리드 Header와 관련된 설정 정보들을 가져온다. [Header](/api/types/Header/)가 설정 모델이다.

#### Syntax

> function getHeader()

#### Parameters

> None

#### Return value

> Type: object  
> [Header](/api/types/Header/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Example

<pre class="prettyprint">
var header = gridView.getHeader();
if (header) {
	alert(JSON.stringify(header));
}
</pre>

#### See Also
> [setHeader](/api/GridBase/setHeader)