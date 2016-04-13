---
layout: apipost
title: setHeader
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setHeader/
tags:
  - header
  - 헤더
---


#### Description

> 그리드 Header와 관련된 정보들을 설정한다. [Header](/api/types/Header/)이 설정 모델이다.

#### Syntax

> function setHeader(options)

#### Parameters

> **options**  
> Type: object  
> [Header](/api/types/Header/) 모델과 같은 설정 정보. [Header](/api/types/Header/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    gridView.setHeader({
        resizable: true,
        visible: true,
        ...
    });
</pre>

#### See Also
> [getHeader](/api/GridBase/getHeader)