---
layout: apipost
title: getValue
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getValue/
---


#### Description

> [Grid Item](/api/features/Grid Item/) 인덱스와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 반환한다.  

#### Syntax

> function getValue(itemIndex, field)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템 인덱스  

> **field**  
> Type: Number\|String  
> 필드 인덱스 또는 fieldName  

#### Return value

> Type: **  
> 데이터 필드의 값.  

#### Example

<pre class="prettyprint">
var itemIndex = grid.getCurrent().itemIndex;
var value = grid.getValue(itemIndex, 1);
</pre>




