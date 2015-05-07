---
layout: apipost
title: setColumn
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumn/
---


#### Description

> 그리드에 설정되어 있는 컬럼의 정보를 변경한다.
> 이 메쏘드를 통해 컬럼 정보를 재설정하기 위해서는 먼저 [columnByName](/api/GridBase/) 등으로 먼저
> 기존 설정 정보를 가져와야 한다.

#### Syntax

> function setColumn(column)

#### Parameters

> **column**
> Type: Object
> 컬럼 설정 정보

#### Return value

> None

#### Example

<pre class="prettyprint">
    var column = grid.columnByName("col1");
    column.editable = false
    grid.setColumn(column);
</pre>




