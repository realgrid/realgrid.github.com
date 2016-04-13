---
layout: apipost
title: columnByTag
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/columnByTag/
tags:
  - column
  - getColumn
---


#### Description

> 컬럼 생성시 지정했던 tag 값으로 컬럼의 설정 정보를 가져온다.  
> 같은 tag를 갖는 컬럼이 하나 이상 존재할 수 있는데 이 메쏘드는 그 중 첫번째 컬럼 정보를 반환한다.  
> 해당하는 컬럼이 존재하지 않으면 null을 반환한다.  

#### Syntax

> function columnByTag(tag)  

#### Parameters

> **tag**  
> Type: string  
> 컬럼 tag  

#### Return value

> Type: Object  
> 컬럼 설정 정보.  
> 컬럼이 존재하지 않는 경우 null.  

#### Examples 

<pre class="prettyprint">
gridVeiw.setColumns([
	{ fieldName:"fldName", name:"colName", tag:"column1"},
	....
]);

var tag= "column1";
var columns = gridVeiw.columnByTag(tag);
if (column) {
    alert(JSON.stringify(column));
} else {
    alert("Column is not exists: " + colName);
}
</pre>

#### See Also
> [columnByName](/api/GridBase/columnByName), [columnByField](/api/GridBase/columnByField), [columnsByField](/api/GridBase/columnsByField), [columnsByTag](/api/GridBase/columnsByTag)

