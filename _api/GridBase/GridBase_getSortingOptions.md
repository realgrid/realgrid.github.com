---
layout: apipost
title: getSortingOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSortingOptions/
tags:
  - sort
  - option
---


#### Description

> 그리드 정렬과 관련된 설정 정보들을 가져온다. [SortingOptions](/api/types/SortingOptions/)이 설정 모델이다.

#### Syntax

> function getSortingOptions()

#### Parameters

> None

#### Return value

> Type: object  
> [SortingOptions](/api/types/SortingOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

##### Examples 

<pre class="prettyprint">
var options = gridView.getSortingOptions();
if (options) {
	alert(JSON.stringify(options))
};
</pre>

#### See Also
> [setSortingOptions](/api/GridBase/setSortingOptions)