---
layout: apipost
title: onFooterCellDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onFooterCellDblClicked/
jsonly: true
---


#### Description

> 사용자가 마우스로 컬럼 Footer셀을 더블 클릭했을 때 호출된다.  

#### Syntax

> function onFooterCellDblClicked (grid, column)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: object  
> [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onFooterCellDblClicked =  function (grid, column) {
        console.log("onFooterCellDblClicked : " + "(" + column.name + ")")
    };
</pre>

