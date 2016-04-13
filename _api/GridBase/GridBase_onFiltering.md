---
layout: apipost
title: onFiltering
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
permalink: /api/GridBase/onFiltering/
tags:
  - filter
---


#### Description

> 필터링이 시작될때 호출된다.  

#### Syntax

> function onFiltering(grid)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return  

> Type: Boolean   
> Default: True  
> 필터링 실행 여부를 지정한다.  False를 반환하면 필터링은 취소된다.  

#### Examples 

<pre class="prettyprint">
    gridView.onFiltering = function (grid){
	    return false;
	}
</pre>

