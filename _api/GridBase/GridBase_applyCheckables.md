---
layout: apipost
title: applyCheckables
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/applyCheckables/
---


#### Description

> CheckBar에 Expression 기준으로 checkable을 적용한다.

#### Syntax

> function applyCheckables()

#### Parameters

> None.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grdMain.setCheckBar({ checkableExpression: "row < 10" });
    grdMain.applyCheckables();
</pre>

