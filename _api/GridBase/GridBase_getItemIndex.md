---
layout: apipost
title: getItemIndex
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getItemIndex/
tags:
  - itemIndex
  - dataRow
  - rowId
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

#### Examples 

<pre class="prettyprint">
    var idx = gridView.getItemIndex(1);
</pre>

#### Demo Links
#### See Also

#### See Also
> [getDataRow](/api/GridBase/getDataRow)