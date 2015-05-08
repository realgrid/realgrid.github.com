---
layout: apipost
title: getDataRow
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getDataRow/
---


#### Description

> 지정한 그리드 행의 Row Id 값을 가져온다.

#### Syntax

> function getDataRow(itemIndex)

#### Parameters

> **itemIndex**  
> Type: Number  
> 그리드의 행번호  

#### Return value

> Type: Number  
> Row ID값

#### Example

<pre class="prettyprint">
    var itemIndex = grdMain.getCurrent().itemIndex;

    var rowId = grdMain.getDataRow(itemIndex);
</pre>




