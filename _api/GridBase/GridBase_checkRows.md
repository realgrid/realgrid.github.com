---
layout: apipost
title: checkRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkRows/
---


#### Description

> 입력된 dataRow와 연결된 Item을 체크하거나 해제한다.

#### Syntax

> function checkRows(dataRows, checked)

#### Parameters

> **dataRows**
> Type: Array of Integer
> dataRow 배열

> **checked**
> Type: Boolean
> true를 입력하면 dataRows와 연결된 Item을 체크한다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grdMain.checkRows([1,2,3,4],true);
</pre>

