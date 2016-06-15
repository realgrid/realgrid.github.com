---
layout: apipost
title: getColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnFilters/
---


#### Description

 지정한 컬럼의 필터를 가져온다.  

#### Syntax

> function getColumnFilters (column)  

#### Parameters

> **column**  
> Type: Object  
> Data Column  


#### Return value

> Type: Objects  
> 필터 Objects  


#### Examples 

<pre class="prettyprint">
gridView.setColumns([
	{fieldName:"fldName1", 
	 name:"colName1",
	 filters:[
	 	{name:"Male",
	 	 criteria:"value ='male'"
	 	},
	 	{name:"Female",
	 	 criteria:"value = 'female'"
	 	}
	 ]},
	....
]);
....
var fieldName = gridView.getCurrent().fieldName;
var column = gridView.columnByField(fieldName);
var filters = gridView.getColumnFilters(column);

alert(JSON.stringify(filters));				
</pre>

---

#### Demo Links

* [Column Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)