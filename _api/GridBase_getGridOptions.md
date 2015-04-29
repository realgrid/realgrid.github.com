---
layout: apipost
title: getGridOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getGridOptions/
---


#### Description

> 그리드 옵션 정보를 가져온다. [GridBase_setGridOptions|setGridOptions](/api/GridBase/)와 다르게 [GridOptions](/api/GridBase/)에서 선언된 그리드 수준의 정보만을 반환한다.

#### Syntax

> function getGridOptions()

#### Parameters

> None.

#### Return value

> Type: Object
> 그리드 옵션 정보. [GridOptions](/api/GridBase/)에서 선언된 속성들을 반환한다.

#### Example

<pre class="prettyprint">
var options = grid.getGridOptions();
alert(JSON.stringify(options));
</pre>




