---
layout: apipost
title: setPasteOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setPasteOptions/
---


#### Description

> 그리드 붙여넣기 정보를 설정한다. [PasteOptions](/api/GridBase/)이 설정 모델이다.

#### Syntax

> function setPasteOptions(options)

#### Parameters

> **options**
> Type: object
> [PasteOptions](/api/GridBase/) 모델과 같은 설정 정보. [PasteOptions](/api/GridBase/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setPasteOptions({
        singleMode: false,
        enableAppend: false,
        ...
    });
</pre>

