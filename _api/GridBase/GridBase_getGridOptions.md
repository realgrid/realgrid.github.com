---
layout: apipost
title: getGridOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getGridOptions/
tags:
  - gridOptions
---


#### Description

 그리드 옵션 정보를 가져온다. [setGridOptions](/api/GridBase/setGridOptions/)와 다르게 [GridOptions](/api/types/GridOptions/)에서 선언된 그리드 수준의 정보만을 반환한다.

#### Syntax

> function getGridOptions()

#### Parameters

> None.

#### Return value

> Type: Object  
> 그리드 옵션 정보. [GridOptions](/api/types/GridOptions/)에서 선언된 속성들을 반환한다.

#### Examples 

<pre class="prettyprint">
var options = gridView.getGridOptions();
if (options) {
    alert(JSON.stringify(options));
}
</pre>

---

#### API Links

* [setGridOptions](/api/GridBase/setGridOptions)


