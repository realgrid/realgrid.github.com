---
layout: apipost
title: deleteSelection
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/deleteSelection/
---


#### Description

> 현재 선택된 행들을 삭제한다.

#### Syntax

> function deleteSelection(force)

#### Parameters

> **force**
> Type: boolean
> true면 설정에 상관없이 여부를 묻지 않고 선택된 행들을 삭제한다.

#### Return value

None

#### Example

<pre class="prettyprint">
    grid.deleteSelection(true);
</pre>

