---
layout: apipost
title: getCurrent
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCurrent/
---


#### Description

> 현재 포커스를 갖는 셀의 [CellIndex](/api/GridBase/) 값을 가져온다.

#### Syntax

> function getCurrent()

#### Parameters

None

#### Return value

> Type: object  
> [CellIndex](/api/types/CellIndex/) 모델 값을 갖는 현재 포커스 셀 위치 정보.

#### Example

<pre class="prettyprint">
    var index = grid.getCurrent();
</pre>

