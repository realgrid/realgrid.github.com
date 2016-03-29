---
layout: apipost
title: columnByName
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/columnByName/
tags:
  - column
  - getColumn
---


#### Description

> 컬럼 이름으로 컬럼 설정 정보를 가져온다.   
> 매개변수로 지정한 컬럼 이름에 해당하는 컬럼이 존재하지 않으면 null을 반환한다.  

#### Syntax

> function columnByName(name)  

#### Parameters

> **name**  
> Type: string  
> 컬럼 이름  

#### Return value

> Type: Object  
> [DataColumn](/api/types/DataColumn/)또는 [ColumnGroup](/api/types/ColumnGroup/) 컬럼이 존재하지 않는 경우 null.  

#### Example

<pre class="prettyprint">
var colName = "column1";
var column = gridView.columnByName(colName);
if (column) {
    alert(JSON.stringify(column));
} else {
    alert("Column is not exists: " + colName);
}
</pre>

#### See Also
> [columnByField](/api/GridBase/columnByField), [columnByTag](/api/GridBase/columnByTag), [columnsByField](/api/GridBase/columnsByField), [columnsByTag](/api/GridBase/columnsByTag)


