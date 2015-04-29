---
layout: apipost
title: addColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addColumnFilters/
---


#### Description

> [DataColumn|DataColumn](/api/GridBase/)에 하나 이상의 [ColumnFilter|ColumnFilter](/api/GridBase/)를 등록한다.

#### Syntax

> function addColumnFilters(column, filters)

#### Parameters

> *column*
> Type: String | Object
> fieldName 또는 [DataColumn|DataColumn](/api/GridBase/) Object

> *filters*
> Type: Array of Object | Object
> [ColumnFilter|ColumnFilter](/api/GridBase/) 배열 혹은 [ColumnFilter|ColumnFilter](/api/GridBase/) 개체.


#### Return value

> None.

#### Example

<pre class="prettyprint">
    var filters = [
          {name:"filter1",criteria:"value='data1'",active:false},
          {name:"filter2",criteria:"value='data2'",active:true}
        ];
    aColumn = grdMain.columnByField("content");
    grdMain.addColumnFilters(aColumn, filters);
    ....
    grdMain.addColumnFilters("content", {
        name: "filter1",
        criteria: "value='data1'",
        active: false
    });
</pre>

