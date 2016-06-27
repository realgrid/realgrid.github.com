---
layout: apipost
title: getRowsOfItems
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getRowsOfItems/
tags:
  - itemIndex
  - dataRow
  - rowId
---


#### Description

> 그리드 itemIndex와 연결된 dataRow를 가져온다.  

#### Syntax

> function getRowsOfItems(items)  

#### Parameters

> **items**  
> Type: Array of Number  
> itemIndex배열이다.  

#### Return value

> Type: array of Number  
> 입력된 itemIndex와 연결된 dataRow이다.  

#### Example

<pre class="prettyprint">
    var dataRows = gridView.getRowsOfItems([1,2,3,4]);
</pre>
