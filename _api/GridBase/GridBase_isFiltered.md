---
layout: apipost
title: isFiltered
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/isFiltered/
jsonly: true
versions:
  - JS 1.1.29+
tags: 
  - 필터
  - filter
---

#### Description

 그리드나 그리드의 특정 컬럼이 필터링 되어 있는지 여부를 반환한다.   

#### Syntax

> function isFiltered(column)

#### Parameters

> **column**  
> Type: String\|Object  
> 컬럼의 name 또는 Column객체이다.  

#### Return value

> Type: Boolean  
> 필터링 여부    

#### Examples 

<pre class="prettyprint">
    var filtered = gridView.isFiltered();
    alert(filtered);
</pre>


