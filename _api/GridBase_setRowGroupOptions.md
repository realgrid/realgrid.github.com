---
layout: apipost
title: setRowGroupOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setRowGroupOptions/
---


#### Description

> 그리드 RowGroup과 관련된 정보들을 설정한다. [RowGroupOptions](/api/GridBase/)이 설정 모델이다.

#### Syntax

> function setRowGroupOptions(options)

#### Parameters

> **options**
> Type: object
> [RowGroupOptions](/api/GridBase/) 모델과 같은 설정 정보. [RowGroupOptions](/api/GridBase/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setRowGroupOptions({
        expandedAdornments: "both",
        collapsedAdornments: "header",
        ...
    });
</pre>

