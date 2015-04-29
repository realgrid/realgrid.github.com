---
layout: apipost
title: onEditRowPasted
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditRowPasted/
---


#### Description

> 그리드 셀에 붙여넣기 할때 발생한다.
> 여러 행을 붙여넣기 할때는 발생하지 않는다.

#### Syntax

> function onEditRowPasted(grid, itemIndex, dataRow, fields, oldValues, newValues)

#### Arguments

> *grid*
> Type: [GridView|GridView](/api/GridBase/)
> GridView 컨트롤

> *itemIndex*
> Type: Number
> 변경된 ItemIndex

> *dataRow*
> Type: Number
> 변경된 dataRow

> *fields*
> Type: Array of Number
>  필드의 인덱스값

> *oldValues*
> Type: Array of *
> 편집전 셀의 데이터 값들

> *newValues*
> Type: Array of *
> 편집후 셀의 데이터 값들

#### Return

None.

#### Example

<pre class="prettyprint">
    grid.onEditRowPasted = function(grid, itemIndex, dataRow, fields, oldValues, newValues){
        $("#eventMsg").show();
        var text = "onEditRowPasted : itemIndex = "+itemIndex+", oldValues = "+ oldValues.toString() +", newValues = "+newValues.toString()+"<br/>";
        $("#eventMsg").append(text);
    };
</pre>

