---
layout: apipost
title: onRowGroupBarClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowGroupBarClicked/
jsonly: true
---


#### Description

> 사용자가 마우스로 RowGroup의 Bar를 클릭했을 때 호출된다.  

#### Syntax

> function onRowGroupBarClicked (grid, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: number  
> 클릭된 영역의 인덱스 값, RowGroup의 Level 값이다.

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onRowGroupBarClicked =  function (grid, index) {
        console.log("onRowGroupBarClicked : " + "(" + index + ")")
    };
</pre>

