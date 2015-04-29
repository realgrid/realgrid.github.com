---
layout: apipost
title: moveRow
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/moveRow/
---


#### Description

> 지정된 dataRow를 newRow로 지정된 dataRow앞으로 이동한다.
> 

#### Syntax

> function moveRow(row, newRow)

#### Parameters

> *row*
> Type: number
> 이동시키려는 dataRow를 지정한다.

> *newRow*
> Type: number
> 이동될 dataRow를 지정한다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.moveRow(10, 0);
</pre>

