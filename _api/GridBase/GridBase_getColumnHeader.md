---
layout: apipost
title: getColumnHeader
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnHeader/
deprecated: true
---


#### Description

> 컬럼 정보 객체나 컬럼 이름으로 해당 컬럼의 헤더 정보를 가져온다.  
> deprecated 대상.  
> RealGridJS에서는 [getColumnProperty](/api/GridBase/getColumnProperty)(column,"header")를 사용한다.

#### Syntax

> function getColumnHeader(column)  

#### Parameters

> **column**  
> Type: string or Object  
> 컬럼 이름이나 컬럼 정보 객체  

#### Return value

> Type: Object  
> 컬럼 정보이거나 존재하지 않으면 null.  

##### Examples 

<pre class="prettyprint">
var colName = "column1";
var header = gridView.getColumnHeader(colName);
</pre>

