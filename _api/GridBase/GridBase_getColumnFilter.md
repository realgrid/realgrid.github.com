---
layout: apipost
title: getColumnFilter
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnFilter/
tags:
  - filter
---


#### Description

> 지정한 필터이름에 해당하는 필터를 가져온다.  

#### Syntax

> function getColumnFilter (column, filterName)  

#### Parameters

> **column**  
> Type: Object  
> Data Column  

> **filterName**  
> Type: String  
> 가져오려고 하는 필터의 이름  


#### Return value

> Type: Object  
> 필터  


#### Example

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
    var filter = gridView.getColumnFilter(column, 'Male');
	
    alert(JSON.stringify(filter));				
</pre>

#### See Also
> [Column Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering) 참조