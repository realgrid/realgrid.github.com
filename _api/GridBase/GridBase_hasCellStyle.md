---
layout: apipost
title: hasCellStyle
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/hasCellStyle/
tags:
  - style
  - cellStyle
---


#### Description

> 셀 스타일이 등록되어 있는지 확인한다.  

#### Syntax

> function hasCellStyle(id)  

#### Parameters

> **id**  
> Type: String  
> 확인하려는 셀 스타일id  

#### Return value

> Type: Boolean  
> 셀 스타일이 이미 등록되어 있다면 true, 아니면 false  

#### Examples 

<pre class="prettyprint">
    var value = gridView.hasCellStyle("style01");
</pre>

#### Demo Links
> [addCellStyle](/api/GridBase/addCellStyle), [getCellStyle](/api/GridBase/getCellStyle), [setCellStyle](/api/GridBase/setCellStyle)