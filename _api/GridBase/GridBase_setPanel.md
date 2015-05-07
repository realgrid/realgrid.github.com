---
layout: apipost
title: setPanel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setPanel/
---


#### Description

> 그리드 Panel과 관련된 정보들을 설정한다. [Panel](/api/GridBase/)이 설정 모델이다.

#### Syntax

> function setPanel(options)

#### Parameters

> **options**
> Type: object
> [Panel](/api/GridBase/) 모델과 같은 설정 정보. [Panel](/api/GridBase/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setPanel({
        minHeight: 30,
        visible: true,
        ...
    });
</pre>

