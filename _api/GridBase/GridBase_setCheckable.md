---
layout: apipost
title: setCheckable
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCheckable/
tags:
  - check
  - checkBar
  - checkable
  - 체크
---


#### Description

> 지정한 itemIndex의 CheckBar에 checkable 상태를 지정한다.

#### Syntax

> function setCheckable(itemIndex, value)

#### Parameters

> **itemIndex**  
> Type: Number  
> Grid Item의 index이다.  

> **value**  
> Type: Boolean  
> Checkable 상태  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    gridView.setCheckable(1, true);
</pre>

#### See Also
> [CheckBar](/api/types/CheckBar), [setCheckableExpression](/api/GridBase/setCheckableExpression)