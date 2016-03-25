---
layout: apipost
title: columnByField
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/columnByField/
tags:
  - column
  - getColumn
---


#### Description

> 필드 이름으로 지정되는 데이터필드에 연결되어 있는 첫 번째 컬럼 정보를 반환한다.  

#### Syntax

> function columnByField(fieldName)  

#### Parameters

> **fieldName**  
> Type: string  
> 데이터필드 이름  

#### Return value

> Type: Object  
> 컬럼 설정 정보나 컬럼이 존재하지 않는 경우 null.  

#### Example

<pre class="prettyprint">
var field = "fldName";
var column = gridView.columnByField(field );
if (column) {
    alert(JSON.stringify(column));
} else {
    alert("Column is not exists: " + field );
}
</pre>





