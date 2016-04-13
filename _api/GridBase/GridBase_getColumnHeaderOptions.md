---
layout: apipost
title: getColumnHeaderOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnHeaderOptions/
jsonly: true
tags: 
  - columnHeader
  - option
---


#### Description

> 컬럼헤더의 옵션 정보를 가져온다.

#### Syntax

> function getColumnHeaderOptions()

#### Parameters

> none 

#### Return value

> Type: Object  
> [ColumnHeaderOptions](/api/types/ColumnHeaderOptions/) 클래스와 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
    var options = gridView.getColumnHeaderOptions();
    if (options) {
    	alert(JSON.stringify(options));
    }
</pre>

#### Demo Links
> [setColumnHeaderOptions](/api/GridBase/setColumnHeaderOptions)