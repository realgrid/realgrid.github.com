---
layout: apipost
title: onGridActivated
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.25+
permalink: /api/GridBase/onGridActivated/
tags:
  - filter
---


#### Description

 그리드가 선택되었을때 발생한다.  
 grid를 전역변수에 저장해서 사용하는 것이 좋다.   

#### Syntax

> function onGridActivated(grid)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return  

> None.

#### Examples 

<pre class="prettyprint">
gridView.onGridActivated = function (grid){
    alert("선택됨")
}
</pre>

