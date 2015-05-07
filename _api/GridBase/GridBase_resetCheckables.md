---
layout: apipost
title: resetCheckables
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/resetCheckables/
---


#### Description

> CheckBar에 적용된 모든 행의 Checkable 상태를 초기화 한다.

#### Syntax

> function resetCheckables()

#### Parameters

> None.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grdMain.setCheckBar({ checkableExpression: "row < 10" });
    grdMain.applyCheckables();
    ....
    
    grdMain.resetCheckables();
</pre>

