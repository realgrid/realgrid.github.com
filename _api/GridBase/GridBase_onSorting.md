---
layout: apipost
title: onSorting
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
permalink: /api/GridBase/onSorting/
tags:
  - event
  - sort
  - 정렬취소
---


#### Description

> 소팅이 시작될때 호출된다.  
> False를 반환하면 소팅은 취소된다.  

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

##### Examples 

<pre class="prettyprint">
    gridView.onSorting = function (grid){

	}
</pre>

#### See Also
> [Sorting](/api/features/Sorting)