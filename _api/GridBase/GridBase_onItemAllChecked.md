---
layout: apipost
title: onItemAllChecked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onItemAllChecked/
---


#### Description

> 사용자가 checkBar의 Header를 클릭하여 전체선택,해제를 하거나 또는 [GridView checkAll](/api/GridView/checkAll/) true 을 입력하여 전체선택,해제를 하면 호출된다.  

#### Syntax

> function onItemAllChecked(grid, checked)  

#### Arguments

> **grid**  
> Type: [GridView](/api/types/GridView/)  
> GridView 컨트롤  

> **checked**  
> Type: Boolean  
> 체크가 되었으면 true, 해제가 되었으면 false가 출력된다.  

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onItemAllChecked =  function (grid, checked) {
        console.log(grid.id," onItemAllChecked:",checked);
    };
</pre>

