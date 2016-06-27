---
layout: apipost
title: onFooterCellClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onFooterCellClicked/
jsonly: true
tags:
  - click
  - event
---


#### Description

 사용자가 마우스로 컬럼 Footer셀을 클릭했을 때 호출된다.  

#### Syntax

> function onFooterCellClicked (grid, column)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: object  
> [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onFooterCellClicked =  function (grid, column) {
    console.log("onFooterCellClicked : " + "(" + column.name + ")")
};
</pre>

