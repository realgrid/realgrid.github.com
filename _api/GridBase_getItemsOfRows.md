---
layout: apipost
title: getItemsOfRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getItemsOfRows/
---


#### Description

> 입력된 dataRow와 연결된 그리드 itemIndex를 가져온다.

#### Syntax

> function getItemsOfRows(dataRows)

#### Parameters

> **dataRows**
> Type: Array of Number
> dataRow index배열이다.

#### Return value

> Type: array of Number
> 입력된 dataRow와 연결된 itemIndex이다.

#### Example

<pre class="prettyprint">
    var itemIndexs = grdMain.getItemsOfRows([1,2,3,4]);
</pre>
