---
layout: apipost
title: onColumnHeaderImageClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onColumnHeaderImageClicked/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - click
  - event
  - columnHeader
  - image
  - 이미지
  - 클릭
---


#### Description

 사용자가 마우스로 컬럼 헤더셀의 이미지를 클릭했을 때 호출된다.  

#### Syntax

> function onColumnHeaderImageClicked (grid, column)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: object  
> [ColumnGroup](/api/types/ColumnGroup/) 혹은 [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onColumnHeaderImageClicked =  function (grid, column) {
    console.log(column);  
};
</pre>

