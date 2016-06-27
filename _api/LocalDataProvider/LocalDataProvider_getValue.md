---
layout: apipost
title: getValue
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/getValue/
tags:
  - 데이터셀 값 반환
---


#### Description

 row와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 반환한다.

#### Syntax

> function getValue(row, field)

#### Parameters

> **row**  
> Type: Number  
> dataRow 인덱스

> **field**  
> Type: Number \| String  
> 필드 인덱스 또는 fieldName

#### Return value

> Type: *  
> 데이터 필드의 값.

#### Examples 

<pre class="prettyprint">
var dataRow = gridView.getCurrent().dataRow;
var value = gridView.getValue(dataRow, "title");
</pre>




