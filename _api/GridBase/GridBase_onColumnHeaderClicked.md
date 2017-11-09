---
layout: apipost
title: onColumnHeaderClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onColumnHeaderClicked/
jsonly: true
tags:
  - click
  - event
  - columnHeader
---


#### Description

 사용자가 마우스로 컬럼 헤더셀을 클릭했을 때 호출된다.  

#### Syntax

> function onColumnHeaderClicked (grid, column, rightClicked)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: object  
> [ColumnGroup](/api/types/ColumnGroup/) 혹은 [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

> **rightClicked**  
> Type: boolean    
> 마우스 오른쪽 버튼이 클릭 되었는지의 여부.  
> JS ver 1.1.26부터 지원된다.    

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onColumnHeaderClicked =  function (grid, column, rightClicked) {
    console.log(column);  
    if (column.type == "data") {
        alert("DataColumn클릭");
    } else if (column.type == "group") {
        alert("columnGroup클릭");
    };
};
</pre>

