---
layout: apipost
title: getItemIndex
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getItemIndex/
---


#### Description

> dataRow와 연결된 itemIndex를 가져온다.

#### Syntax

> function getItemIndex(dataRow)

#### Parameters

> **dataRow**
> Type: Number
> dataProvider의 row index이다.

#### Return value

> Type: Number
> 입력된 dataRow와 연결된 itemIndex이다.

#### Example

<pre class="prettyprint">
    var idx = grdMain.getItemIndex(1);
</pre>
