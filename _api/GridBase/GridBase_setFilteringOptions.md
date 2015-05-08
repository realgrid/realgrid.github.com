---
layout: apipost
title: setFilteringOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setFilteringOptions/
---


#### Description

> 그리드 필터링과 관련된 정보들을 설정한다. [FilteringOptions](/api/Types/FilteringOptions/)이 설정 모델이다.

#### Syntax

> function setFilteringOptions(options)

#### Parameters

> **options**  
> Type: object  
> [FilteringOptions](/api/Types/FilteringOptions/) 모델과 같은 설정 정보. [FilteringOptions](/api/Types/FilteringOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setFilteringOptions({
        enabled: true,
        ...
    });
</pre>

