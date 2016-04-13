---
layout: apipost
title: getSelectedRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelectedRows/
tags:
  - select
  - dataRow
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

#### Examples 

<pre class="prettyprint">
        var sel = gridView.getSelectedRows();
        window.console && console.log("SelectedRows: ", JSON.stringify(sel));
</pre>

#### Demo Links
#### See Also

#### See Also
[getSelectedItems](/api/GridBase/getSelectedItems/)