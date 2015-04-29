---
layout: apipost
title: setCopyOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCopyOptions/
---


#### Description

> Copy 정보를 설정한다. [CopyOptions](/api/GridBase/)가 설정 모델이다.

#### Syntax

> function setCopyOptions(options)

#### Parameters

> *options*
> Type: object
> [CopyOptions](/api/GridBase/) 모델과 같은 설정 정보. [CopyOptions](/api/GridBase/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setCopyOptions
    grid.setDisplayOptions({
        singleMode:true
    });
</pre>

