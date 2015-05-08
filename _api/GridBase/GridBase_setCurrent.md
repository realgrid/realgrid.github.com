---
layout: apipost
title: setCurrent
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCurrent/
---


#### Description

> 포커스 셀의 위치를 지정한다.  
> row의 경우 itemIndex > dataRow 순으로 적용되고  
> column의 경우 column > fieldIndex > fieldName 순으로 적용된다.  

#### Syntax

> function setCurrent(current)

#### Parameters

> **current**  
> Type: object  
> [CellIndex](/api/types/CellIndex/) 값.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var index = {
        itemIndex: $("#txtItemIndex").val(),
        column: $("#txtColumn").val(),
        dataRow: $("#txtDataRow").val(),
        fieldName: $("#txtFieldName").val(),
    };
    grid.setCurrent(index);
</pre>

