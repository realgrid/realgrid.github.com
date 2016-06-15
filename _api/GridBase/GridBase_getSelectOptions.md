---
layout: apipost
title: getSelectOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelectOptions/
tags:
  - option
  - selectOption
---


#### Description

 그리드 선택 방식 및 선택 표시와 관련된 설정 정보들을 가져온다. [SelectOptions](/api/types/SelectOptions/)이 설정 모델이다.

#### Syntax

> function getSelectOptions()

#### Parameters

> None

#### Return value

> Type: object  
> [SelectOptions](/api/types/SelectOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
var options = gridView.getSelectOptions();
if (options) {
	alert(JSON.stringify(options))
}
</pre>

---

#### API Links

* [setSelectOptions](/api/GridBase/setSelectOptions)