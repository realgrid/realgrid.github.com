---
layout: apipost
title: getFooter
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getFooter/
tags:
  - fooger
---


#### Description

> 그리드 Footer와 관련된 설정 정보들을 가져온다. [Footer](/api/types/Footer/)가 설정 모델이다.

#### Syntax

> function getFooter()

#### Parameters

> None

#### Return value

> Type: object  
> [Footer](/api/types/Footer/) 설정 모델과 동일한 내용의 객체가 반환된다.

##### Examples 

<pre class="prettyprint">
var footer = grid.getFooter();
if (footer) {
	alert(JSON.stringify(footer));
}
</pre>

#### See Also
> [setFooter](/api/GridBase/setFooter)  
> [Column Footer](http://demo.realgrid.com/Demo/ColumnFooter)