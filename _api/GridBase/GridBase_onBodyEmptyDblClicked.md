---
layout: apipost
title: onBodyEmptyDblClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onBodyEmptyDblClicked/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - click
  - event
  - body
  - empty
  - 빈영역
  - 더블클릭
---


#### Description

 사용자가 마우스로 빈 영역을 더블클릭했을 때 호출된다.  

#### Syntax

> function onBodyEmptyDblClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onBodyEmptyDblClicked =  function (grid) {
    alert("클릭") 
};
</pre>

