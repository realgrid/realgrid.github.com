---
layout: apipost
title: onColumnHeaderDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onColumnHeaderDblClicked/
tags:
  - event
  - click
  - doubleClick
  - columnHeader
---


#### Description

> 사용자가 마우스로 컬럼 헤더셀을 더블 클릭했을 때 호출된다.  

#### Syntax

> function onColumnHeaderDblClicked (grid, column)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: object  
> [ColumnGroup](/api/types/ColumnGroup/) 혹은 [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

#### Return

> None.  

##### Examples 

<pre class="prettyprint">
    grid.onColumnHeaderDblClicked =  function (grid, column) {
        console.log(column);  
        if (column.type == "data") {
            alert("DataColumn클릭");
        } else if (column.type == "group") {
            alert("columnGroup클릭");
        };
    };
</pre>

