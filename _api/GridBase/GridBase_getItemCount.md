---
layout: apipost
title: getItemCount
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getItemCount/
tags:
  - itemCount
  - count
---


#### Description

 그리드에 현재 표시된 [Grid Item](/api/features/Grid Item) 개수를 반환한다.  
 rowGroup의 header, footer가 있는 경우 itemCount에 포함된다.

#### Syntax

> function getItemCount()

#### Parameters

> None.

#### Return value

> Type: Number  
> 그리드에 표시된 [Grid Item](/api/features/Grid Item) 개수

#### Examples 

<pre class="prettyprint">
var count = gridView.getItemCount();
</pre>
