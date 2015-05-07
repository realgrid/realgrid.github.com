---
layout: apipost
title: setCheckableExpression
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCheckableExpression/
---


#### Description

> [CheckBar](/api/GridBase/)에 checkableExpression 설정과 적용을 동시에 수행한다.

#### Syntax

> function setCheckableExpression(expression, apply)

#### Parameters

> **expression**
> Type: String
> 체크 가능 여부의 수식을 지정한다.

> **apply**
> Type: Boolean
> Default: true
> Checkable 의 즉시 적용여부

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setCheckableExpression("row < 10", true);
</pre>

