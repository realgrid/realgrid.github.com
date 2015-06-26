---
layout: apipost
title: onSorting
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
permalink: /api/GridBase/onSorting/
---


#### Description

> 소팅이 시작될때 호출된다.  

#### Syntax

> function onSorting(grid)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return  

> Type: Boolean   
> Default: True  
> 소팅 실행 여부를 지정한다. False를 반환하면 소팅은 취소된다.  

#### Example

<pre class="prettyprint">
    grid.onSorting = function (grid){
	    return false;
	}
</pre>

