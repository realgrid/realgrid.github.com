---
layout: apipost
title: onEditRowPasted
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditRowPasted/
tags:
  - clipboard
  - paste
---


#### Description

> 그리드 셀에 붙여넣기 할때 발생한다.  
> 여러 행을 붙여넣기 할때는 [onRowsPasted](/api/GridBase/onRowsPasted)참조

#### Syntax

> function onEditRowPasted(grid, itemIndex, dataRow, fields, oldValues, newValues)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: Number  
> 변경된 ItemIndex  

> **dataRow**  
> Type: Number  
> 변경된 dataRow  

> **fields**  
> Type: Array of Number  
>  필드의 인덱스값  

> **oldValues**  
> Type: Array of *  
> 편집전 셀의 데이터 값들  

> **newValues**  
> Type: Array of *  
> 편집후 셀의 데이터 값들  

#### Return

> None.

#### Example

<pre class="prettyprint">
    gridView.onEditRowPasted = function(grid, itemIndex, dataRow, fields, oldValues, newValues){
        var text = "onEditRowPasted : itemIndex = "+itemIndex+", oldValues = "+ oldValues.toString() +", newValues = "+newValues.toString();
        console.log(text);
    };
</pre>

#### See Also
> [onRowsPasted](/api/GridBase/onRowsPasted)