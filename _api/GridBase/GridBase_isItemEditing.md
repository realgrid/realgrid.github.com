---
layout: apipost
title: isItemEditing
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/isItemEditing/
tags:
  - editing
  - cancel
  - commit
---


#### Description

> 그리드가 현재 편집중이면 true를 반환한다.

#### Syntax

> function isItemEditing()

#### Parameters

> none

#### Return value

> Type: Boolean  
> 그리드가 편집중이면 true를 반환한다.

#### Examples 

<pre class="prettyprint">
    if (grdMain.isItemEditing()) {
        alert("편집중입니다");
    }
</pre>

#### See Also
> [commit](/api/GridBase/commit), [cancel](/api/GridBase/cancel), [commitEditor](/api/GridBase/commitEditor), [cancelEditor](/api/GridBase/cancelEditor)