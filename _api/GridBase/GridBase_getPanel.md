---
layout: apipost
title: getPanel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getPanel/
tags:
  - panel
  - rowGroup
---


#### Description

> 그리드 Panel에 대한 설정 정보들을 가져온다. [Panel](/api/types/Panel/)이 설정 모델이다.

#### Syntax

> function getPanel()

#### Parameters

> None

#### Return value

> Type: object  
> [Panel](/api/types/Panel/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Example

<pre class="prettyprint">
var panelOptions = grid.getPanel();
</pre>

#### See Also
> [setPanel](/api/GridBase/setPanel)