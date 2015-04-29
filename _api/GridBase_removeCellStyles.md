---
layout: apipost
title: removeCellStyles
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/removeCellStyles/
---


#### Description

> 지정한 셀 스타일들을 삭제한다.

#### Syntax

> function removeCellStyles(ids)

#### Parameters

> *ids*
> Type: Array of String
> 삭제할 셀 스타일명의 배열

#### Return value

> None

#### Example

<pre class="prettyprint">
    var ids = ["style01", "style02", "style03"]
    grdMain.removeCellStyles(ids);
</pre>
