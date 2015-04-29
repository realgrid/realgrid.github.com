---
layout: apipost
title: getSelectedRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelectedRows/
---


#### Description

> 현재 선택된 데이터 행(dataRow)들을 가져온다.


#### Syntax

> function getSelectedRows()

#### Parameters

> None.

#### Return value

> Type: Arrary of Number
> 현재 선택된 데이터 행들.

#### Example

<pre class="prettyprint">
        var sel = grid.getSelectedRows();
        window.console && console.log("SelectedRows: ", JSON.stringify(sel));
</pre>

