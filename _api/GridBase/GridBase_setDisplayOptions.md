---
layout: apipost
title: setDisplayOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setDisplayOptions/
---


#### Description

> 그리드 표시 정보를 설정한다. [DisplayOptions](/api/types/DisplayOptions/)이 설정 모델이다.

#### Syntax

> function setDisplayOptions(options)

#### Parameters

> **options**  
> Type: object  
> [DisplayOptions](/api/types/DisplayOptions/) 모델과 같은 설정 정보. [DisplayOptions](/api/types/DisplayOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setDisplayOptions({
        columnResizalbe: true,
        rowResizalbe: false,
        ...
    });
</pre>

