---
layout: apipost
title: restoreColumns
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/restoreColumns/
tags:
  - columnLayout
  - layout
---


#### Description

> 그리드의 칼럼위치를 최초상태로 되돌린다.

#### Syntax

> function restoreColumns(restoreSize)

#### Parameters

> **restoreSize**
> Type: boolean
> false인 경우 현재 칼럼의 넓이를 유지한다.

#### Return value

> none

#### Example

<pre class="prettyprint">
    gridView.restoreColumns();
</pre>

#### See Also
[linearizeColumns](/api/GridBase/linearizeColumns)