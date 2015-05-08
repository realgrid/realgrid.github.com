---
layout: apipost
title: setStateBar
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setStateBar/
---


#### Description

> 그리드 StateBar와 관련된 정보들을 설정한다. [StateBar](/api/Types/StateBar/)가 설정 모델이다.

#### Syntax

> function setStateBar(options)

#### Parameters

> **options**  
> Type: object  
> [StateBar](/api/Types/StateBar/) 모델과 같은 설정 정보. [StateBar](/api/Types/StateBar/) 모델의 속성들 중 변경하고자 하는 값들만 전달하면 된다.    

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setStateBar({
        width: 20,
        visible: true,
        ...
    });
</pre>

