---
layout: apipost
title: getCellBounds
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCellBounds/
jsonly: true
versions:
  - JS 1.1.20+
tags: 
  - 위치
  - 좌표
  - 셀위치
  - 셀좌표
---


#### Description

그리드에서 특정 셀의 좌표값을 가져온다.  
특정 셀이 그리드에서 보이지 않는 영역에 있을 경우 null 이 반환된다.  

#### Syntax

> function getCellBounds(itemIndex, column, outer)

#### Parameters

> **itemIndex**  
> Type: Number  
> 그리드의 행 번호 

> **column**  
> Type: string or Object  
> 컬럼 이름이나 컬럼 정보 객체  

> **outer**  
> Type: Boolean 
> Default: True
> outer는 true일 경우 document.body의 좌표값, false일 경우 container(부모 div)의 좌표값이 반환된다.     

#### Return value

> Type: Object  
> 좌표값, 보이지 않으면 null이 반환된다.    

#### Examples 

<pre class="prettyprint">
var itemIndex = 1;
var colName = "column1";
var xy = gridView.getCellBounds(itemIndex, colName, true);
</pre>

