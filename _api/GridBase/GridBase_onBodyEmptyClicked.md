---
layout: apipost
title: onBodyEmptyClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onBodyEmptyClicked/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - click
  - event
  - body
  - empty
  - 빈영역
  - 클릭
---


#### Description

 사용자가 마우스로 빈 영역을 클릭했을 때 호출된다.  

#### Syntax

> function onBodyEmptyClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onBodyEmptyClicked =  function (grid) {
    alert("클릭") 
};
</pre>

