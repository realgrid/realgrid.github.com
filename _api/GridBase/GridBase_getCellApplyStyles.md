---
layout: apipost
title: getCellApplyStyles
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCellApplyStyles/
jsonly: true
versions:
  - JS 1.1.20+
tags: 
  - 스타일
  - 적용된 스타일
  - style
---


#### Description

지정한 셀에 적용된 스타일 정보들을 가져온다.     

#### Syntax

> function getCellApplyStyles(itemIndex, column)

#### Parameters

> **itemIndex**  
> Type: Number  
> 그리드의 행 번호 

> **column**  
> Type: string or Object  
> 컬럼 이름이나 컬럼 정보 객체  

#### Return value

> Type: Object  
> 스타일 정보.      

#### Examples 

<pre class="prettyprint">
var index = gridView.getCurrent();
var column = index.column ? index.column : gridView.columnByField(index.fieldName);
gridView.getCellApplyStyles(index.itemIndex, column);
</pre>

