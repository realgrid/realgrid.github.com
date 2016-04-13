---
layout: apipost
title: getDataRow
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getDataRow/
tags:
  - itemIndex
  - dataRow
  - rowId
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

##### Examples 

<pre class="prettyprint">
    var itemIndex = gridView.getCurrent().itemIndex;

    var rowId = gridView.getDataRow(itemIndex);
</pre>

#### See Also
> [getItemIndex](/api/GridBase/getItemIndex)