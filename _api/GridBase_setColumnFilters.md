---
layout: apipost
title: setColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnFilters/
---


#### Description

> 그리드 컬럼에 filter를 설정한다.

#### Syntax

> function setColumnFilters(column, filters)

#### Parameters

> *column*
> Type: String|Object
> column명 또는 [DataColumn|Column](/api/GridBase/)객체이다.

> *filters*
> Type: Array of Object
> filter객체의 배열이다.

#### Return value

> none

#### Example

<pre class="prettyprint">
    var filters = [{name:"filter1",criteria:"value='가나다라'"},{name:"filter2",criteria:"value='가나다라'", active:true}];
    var aColumn = grdMain.columnByField("title");

    grdMain.setColumnFilters(aColumn,filters);
</pre>
