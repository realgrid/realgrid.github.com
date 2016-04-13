---
layout: apipost
title: getStateBar
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getStateBar/
tags:
  - option
  - stateBar
  - 상태표시
---


#### Description

> 그리드 StateBar 설정 정보를 가져온다. [StateBar](/api/types/StateBar/) 가 설정 모델이다.  

#### Syntax

> function getStateBar()

#### Parameters

> None

#### Return value

> Type: object  
> [StateBar](/api/types/StateBar/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
var options = gridView.getStateBar();
if (options) {
	alert(JSON.stringify(options));
}
</pre>

#### See Also
> [setStateBar](/api/GridBase/setStateBar)