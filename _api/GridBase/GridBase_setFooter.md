---
layout: apipost
title: setFooter
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setFooter/
---


#### Description

> 그리드 Footer와 관련된 정보들을 설정한다. [Footer](/api/types/Footer/)가 설정 모델이다.

#### Syntax

> function setFooter(options)

#### Parameters

> **options**  
> Type: object  
> [Footer](/api/types/Footer/) 모델과 같은 설정 정보. [Footer](/api/types/Footer/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setFooter({
        resizable: false,
        visible: true,
        ...
    });
</pre>

