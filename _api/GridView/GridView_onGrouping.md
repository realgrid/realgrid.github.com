---
layout: apipost
title: onGrouping
part: Objects
objectname: GridView
directiontype: Callback
jsonly: true
permalink: /api/GridView/onGrouping/
tags: 
  - 그룹핑 취소
  - 그룹핑 중지
  - 그룹핑 실행 여부
---


#### Description

> 그룹핑이 시작될때 호출된다.  

#### Syntax

> function onGrouping(grid)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return  

> Type: Boolean   
> Default: True  
> 그룹핑 실행 여부를 지정한다.  False를 반환하면 그룹핑은 취소된다.  

#### Example

<pre class="prettyprint">
    grid.onGrouping = function (grid){
	    return false;
	}
</pre>

