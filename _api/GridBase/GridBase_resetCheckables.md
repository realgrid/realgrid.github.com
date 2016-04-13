---
layout: apipost
title: resetCheckables
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/resetCheckables/
tags:
  - check
  - checkable
  - 체크
---


#### Description

> CheckBar에 적용된 모든 행의 Checkable 상태를 초기화 한다.

#### Syntax

> function resetCheckables(clearExpression)

#### Parameters

> **clearExpression**  
> Type: boolean  
> true이면 CheckBarOptions의 checkableExpression을 clear시킨다.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setCheckBar({ checkableExpression: "row < 10" });
    gridView.applyCheckables();
    ....
    
    gridView.resetCheckables();
</pre>

#### Demo Links
#### See Also

#### See Also
> [CheckBar](/api/types/CheckBar), [setCheckable](/api/GridBase/setCheckable), [setCheckableExpression](/api/GridBase/setCheckableExpression)