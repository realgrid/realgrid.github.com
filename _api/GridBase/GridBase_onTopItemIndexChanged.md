---
layout: apipost
title: onTopItemIndexChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onTopItemIndexChanged/
jsonly: true
tags:
  - scroll
  - event
---


#### Description

 수직 스크롤 바의 위치가 변경될때 발생된다.    

#### Syntax

> function onTopItemIndexChanged(grid, itemIndex)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: number  
> 스크롤 중일때 그리드 상단에 표시되는 itemIndex값.    


#### Return

> None.

#### Examples 

<pre class="prettyprint">
gridView.onTopItemIndexChanged =  function (grid, itemIndex) {
    console.log("onTopItemIndexChanged! Top " + itemIndex);
};
</pre>

