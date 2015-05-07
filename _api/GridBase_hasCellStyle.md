---
layout: apipost
title: hasCellStyle
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/hasCellStyle/
---


#### Description

> 셀 스타일이 등록되어 있는지 확인한다.

#### Syntax

> function hasCellStyle(id)

#### Parameters

> **id**
> Type: String
> 확인하려는 셀 스타일id

#### Return value

> Type: Boolean
> 셀 스타일이 이미 등록되어 있다면 true, 아니면 false

#### Example

<pre class="prettyprint">
    var value = grdMain.hasCellStyle("style01");
</pre>

