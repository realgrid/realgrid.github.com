---
layout: apipost
title: addColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addColumnFilters/
tags:
  - filter
---


#### Description

> [DataColumn](/api/types/DataColumn/)에 하나 이상의 [ColumnFilter](/api/types/ColumnFilter/)를 등록한다.  

#### Syntax

> function addColumnFilters(column, filters)  

#### Parameters

> **column**  
> Type: String \| Object  
> fieldName 또는 [DataColumn](/api/types/DataColumn/) Object  

> **filters**  
> Type: Array of Object \| Object  
> [ColumnFilter](/api/types/ColumnFilter/) 배열 혹은 [ColumnFilter](/api/types/ColumnFilter/) 개체.  


#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    var filters = [
          {name:"filter1",criteria:"value='data1'",active:false},
          {name:"filter2",criteria:"value='data2'",active:true}
        ];
    aColumn = gridView.columnByField("content");
    gridView.addColumnFilters(aColumn, filters);
    ....
    gridView.addColumnFilters("content", {
        name: "filter1",
        criteria: "value='data1'",
        active: false
    });
</pre>

#### Demo Links
> [toggleAllColumnFilters](/api/GridBase/toggleColumnFilters), [setColumnFilters](/api/GridBase/setColumnFilters), [clearColumnFilters](/api/GridBase/clearColumnFilters), [activateAllColumnFilters](/api/GridBase/activateAllColumnFilters), [activateColumnFilters](/api/GridBase/activateColumnFilters)  
> [Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)