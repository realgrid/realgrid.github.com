---
layout: apipost
title: columnsByTag
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/columnsByTag/
tags:
  - column
  - getColumn
---


#### Description

컬럼 생성시 지정했던 tag 값으로 컬럼들의 설정 정보를 가져온다.  
같은 tag를 갖는 컬럼이 하나 이상 존재할 수 있으므로 배열로 반환한다.  
해당하는 컬럼이 존재하지 않으면 null을 반환한다.

#### Syntax

>function columnsByTag(tag)

#### Parameters

> **tag**  
> Type: string  
> 컬럼 tag  

#### Return value

> Type: array of Object  
> 컬럼 설정 정보 배열.  
> 컬럼이 존재하지 않는 경우 null.  

#### Examples 

<pre class="prettyprint">
gridView.setColumns([
	{fieldName:"fldName1", name:"colName1", tag:"numField"},
	{fieldName:"fldName2", name:"colName2", tag:"numField"},
	{fieldName:"fldName3", name:"colName3", tag:"textField"},
	...
])
var tag= "numField";
var columns = gridView.columnByTag(tag);
</pre>

---

#### API Links

* [columnByName](/api/GridBase/columnByName)
* [columnByField](/api/GridBase/columnByField)
* [columnByTag](/api/GridBase/columnByTag)
* [columnsByField](/api/GridBase/columnsByField)

