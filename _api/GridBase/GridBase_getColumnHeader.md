---
layout: apipost
title: getColumnHeader
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnHeader/
---


#### Description

> 컬럼 정보 객체나 컬럼 이름으로 해당 컬럼의 헤더 정보를 가져온다.  

#### Syntax

> function getColumnHeader(column)  

#### Parameters

> **column**  
> Type: string or Object  
> 컬럼 이름이나 컬럼 정보 객체  

#### Return value

> Type: Object  
> 컬럼 정보이거나 존재하지 않으면 null.  

#### Example

<pre class="prettyprint">
var colName = "column1";
var header = getColumnHeader(colName);
</pre>




