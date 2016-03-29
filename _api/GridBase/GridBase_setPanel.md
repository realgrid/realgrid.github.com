---
layout: apipost
title: setPanel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setPanel/
tags:
  - rowGroup
  - groupPanel
  - 로우그룹
---


#### Description

> 그리드 Panel과 관련된 정보들을 설정한다. [Panel](/api/types/Panel/)이 설정 모델이다.

#### Syntax

> function setPanel(options)

#### Parameters

> **options**  
> Type: object  
> [Panel](/api/types/Panel/) 모델과 같은 설정 정보. [Panel](/api/types/Panel/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Example

<pre class="prettyprint">
    gridView.setPanel({
        minHeight: 30,
        visible: true,
        ...
    });
</pre>

#### See Also
> [getPanel](/api/GridBase/getPanel)