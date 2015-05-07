---
layout: apipost
title: commit
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/commit/
---


#### Description

> 편집 중인 행의 편집을 완료하고 DataProvider에 저장한다.

#### Syntax

> function commit(force)

#### Parameters

> **force**
> Type: boolean
> true면 하나의 셀도 commit되지 않아도 행을 commit 한다. 지정하지 않으면 false로 해석한다.

#### Return value

None

#### Example

<pre class="prettyprint">
    grid.commit(false)
</pre>

