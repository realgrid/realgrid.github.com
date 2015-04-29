---
layout: apipost
title: getColumnFilter
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnFilter/
---


#### Description

> 지정한 필터이름에 해당하는 필터를 가져온다.

#### Syntax

> function getColumnFilter (column, filterName)

#### Parameters

> *column*
> Type: Object
> Data Column

> *filterName*
> Type: String
> 가져오려고 하는 필터의 이름


#### Return value

> Type: Object
> 필터


#### Example

<pre class="prettyprint">
	var fieldName = grdMain.getCurrent().fieldName;
	var column = grdMain.columnByField(fieldName);
	var filter = grdMain.getColumnFilter(column, 'Male');
	
	alert(JSON.stringify(filter));				
</pre>

