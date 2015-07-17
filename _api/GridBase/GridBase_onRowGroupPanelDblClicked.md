---
layout: apipost
title: onRowGroupPanelDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupPanelDblClicked/
jsonly: true
---


#### Description

> 사용자가 마우스로 RowGroupPanel을 더블클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupPanelDblClicked (grid, column)  

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
    grid.onRowGroupPanelDblClicked =  function (grid, column) {
        console.log("onRowGroupPanelDblClicked : " + "(" + column.name + ")")
    };
</pre>

