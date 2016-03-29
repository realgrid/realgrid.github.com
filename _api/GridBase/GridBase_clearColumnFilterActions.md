---
layout: apipost
title: clearColumnFilterActions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearColumnFilterActions/
tags:
  - filter
  - clearFilter
---


#### Description

> 지정된 컬럼에 존재하는 FilterActions을 clear한다.  

#### Syntax

> function clearColumnFilterActions(column)  

#### Parameters

>**column**
>Type: string or Object
>컬럼 이름이나 컬럼 정보 객체

#### Return value

> None.  

#### Example

<pre class="prettyprint">
    gridView.clearColumnFilterActions("OrderID")
</pre>

#### See Also
> [setColumnFilterActions](/api/GridBase/setColumnFilterActions)  
> [ColumnFilterAction](/api/types/ColumnFilterAction/)  
> [Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)