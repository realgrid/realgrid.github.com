---
layout: apipost
title: onColumnHeaderClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onColumnHeaderClicked/
---


#### Description

> 사용자가 마우스로 컬럼 헤더셀을 클릭했을 때 호출된다.

#### Syntax

> function onColumnHeaderClicked (grid, column)

#### Arguments

> *grid*
> Type: [GridView|GridView](/api/GridBase/)
> GridView 컨트롤

> *column*
> Type: object
> [ColumnGroup|Column](/api/GridBase/) 혹은 [DataColumn](/api/GridBase/)과 같은 구조의 object.

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onColumnHeaderClicked =  function (grid, column) {
        console.log(column);  
        if (column.type == "data") {
            alert("dataColumn클릭");
        } else if (column.type == "group") {
            alert("columnGroup클릭");
        };
    };
</pre>

