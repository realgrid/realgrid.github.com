---
layout: apipost
title: getChildColumnNames
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getChildColumnNames/
jsonly: true
versions:
  - JS 1.1.33+
tags:
  - 자식컬럼
  - 그룹컬럼
  - childcolumn
  - groupcolumn
---


#### Description

 [ColumnGroup](/api/types/ColumnGroup/)에 속한 자식컬럼명을 가져온다.  

#### Syntax

> function getChildColumnNames(parent)  

#### Parameters

> **parent**  
> Type: String\|Object  
> 칼럼의 name 또는 Column객체이다.   

#### Return value

> Type: Array of String  
> 자식 컬럼명이다.    

#### Examples 

<pre class="prettyprint">
var childNames = gridView.getChildColumnNames("column");
</pre>

---

#### API Links

