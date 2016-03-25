---
layout: apipost
title: applyCheckables
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/applyCheckables/
tags:
  - checkBar
  - checkable
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
    gridView.setCheckBar({ checkableExpression: "row < 10" });
    gridView.applyCheckables();
</pre>

