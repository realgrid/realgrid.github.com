---
layout: apipost
title: setSortingOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setSortingOptions/
---


#### Description

> 그리드 정렬과 관련된 정보들을 설정한다. [SortingOptions](/api/GridBase/)이 설정 모델이다.

#### Syntax

> function setSortingOptions(options)

#### Parameters

> *options*
> Type: object
> [SortingOptions](/api/GridBase/) 모델과 같은 설정 정보. [SortingOptions](/api/GridBase/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setSortingOptions({
        enabled: true,
        style: "exclusive",
        ...
    });
</pre>

