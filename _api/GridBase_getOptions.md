---
layout: apipost
title: getOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getOptions/
---


#### Description

> 그리드 옵션 정보를 가져온다. [GridBase_setOptions|setOptions](/api/GridBase/)와 다르게 [GridOptions](/api/GridBase/)에서 선언된 그리드 수준의 정보만을 반환한다.

#### Syntax

> function getOptions()

#### Parameters

> None.

#### Return value

> Type: Object
> 그리드 옵션 정보. [GridOptions](/api/GridBase/)에서 선언된 속성들을 반환한다.

#### Example

<pre class="prettyprint">
var options = grid.getOptions();
alert(JSON.stringify(options));
</pre>




