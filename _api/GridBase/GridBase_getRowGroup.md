---
layout: apipost
title: getRowGroup
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getRowGroup/
tags:
  - option
  - rowGroup
---


#### Description

> 그리드 RowGroup과 관련된 설정 정보들을 가져온다. [RowGroupOptions](/api/types/RowGroupOptions/)이 설정 모델이다.

#### Syntax

> function getRowGroup()

#### Parameters

> None

#### Return value

> Type: object  
> [RowGroupOptions](/api/types/RowGroupOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Example

<pre class="prettyprint">
var options = gridView.getRowGroup();
if (options) {
	alert(JSON.stringify(options));
}
</pre>

#See Also
> [setRowGroup](/api/GridBase/setRowGroup)