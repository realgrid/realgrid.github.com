---
layout: apipost
title: getColumnGroupNames
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnGroupNames/
tags:
  - columnGroup
  - groupColumn
---


#### Description

> 컬럼그룹들의 이름을 가져온다.

#### Syntax

> function getColumnGroupNames()

#### Parameters

> None.

#### Return value

> Type: array of string  
> 컬럼그룹 이름 배열.

#### Examples 

<pre class="prettyprint">
    gridView.setColumns([
    	{ type:"group",
    	  name:"groupColumn1",
    	  columns:[
    	      {fieldName:"fldName1", name:"column11"},
    	      {fieldName:"fldName2", name:"column12"}
    	  ]
    	},
    	{ type:"group",
    	  name:"groupColumn2",
    	  columns:[
    	      {fieldName:"fldName3", name:"column21"},
    	      {fieldNaem:"fldName4", name:"column22"}
    	  ]
    	}
        ....
    ]);

    var groups = grid.getColumnGroupNames();
</pre>

#### Demo Links
#### See Also

#### See Also
> [getColumnNames](/api/GridBase/getColumnNames), [getColumns](/api/GridBase/getColumns)