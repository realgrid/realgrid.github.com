---
layout: apipost
title: setIndicator
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setIndicator/
tags:
  - indicator
  - 행번호표시
---


#### Description

> 그리드 Indicator와 관련된 정보들을 설정한다. [Indicator](/api/types/Indicator/)이 설정 모델이다.

#### Syntax

> function setIndicator(options)

#### Parameters

> **options**  
> Type: object  
> [Indicator](/api/types/Indicator/) 모델과 같은 설정 정보. [Indicator](/api/types/Indicator/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
	gridView.setIndicator({
		displayValue: "index",
		width: 50,
		selectable: true,
		visible: true,
		zeroBase: true,
		rowOffset: 0, 
		indexOffset: 0,
		headText: "head",
		footText: "foot",
		headImageUrl: "/img/common/dot_arrow2_top.gif",
		footImageUrl: "/img/common/dot_arrow2_bottom.gif"
	});
</pre>

#### Demo Links
> [getIndicator](/api/GridBase/getIndicator)