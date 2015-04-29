---
layout: apipost
title: setHeader
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setHeader/
---


#### Description

> 그리드 Indicator와 관련된 정보들을 설정한다. [Header](/api/GridBase/)이 설정 모델이다.

#### Syntax

> function setHeader(options)

#### Parameters

> *options*
> Type: object
> [Header](/api/GridBase/) 모델과 같은 설정 정보. [Header](/api/GridBase/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setHeader({
        resizable: true,
        visible: true,
        ...
    });
</pre>

