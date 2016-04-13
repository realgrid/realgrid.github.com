---
layout: apipost
title: getCurrent
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCurrent/
tags:
  - current
  - cell
  - focusCell
---


#### Description

> 현재 포커스를 갖는 셀의 [CellIndex](/api/types/CellIndex/) 값을 가져온다.

#### Syntax

> function getCurrent()

#### Parameters

None

#### Return value

> Type: object  
> [CellIndex](/api/types/CellIndex/) 모델 값을 갖는 현재 포커스 셀 위치 정보.

#### Examples 

<pre class="prettyprint">
    var index = gridView.getCurrent();
</pre>

#### Demo Links
#### See Also

#### See Also
> [setCurrent](/api/GridBase/setCurrent)