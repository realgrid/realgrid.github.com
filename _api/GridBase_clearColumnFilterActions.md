---
layout: apipost
title: clearColumnFilterActions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearColumnFilterActions/
---


#### Description

> 지정된 컬럼에 존재하는 FilterActions을 clear한다.

#### Syntax

> function clearColumnFilterActions(column)

#### Parameters

>*column*
>Type: string or Object
>컬럼 이름이나 컬럼 정보 객체

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grdMain.clearColumnFilterActions("OrderID")
</pre>

