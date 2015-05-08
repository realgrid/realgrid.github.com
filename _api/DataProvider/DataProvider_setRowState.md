---
layout: apipost
title: setRowState
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/setRowState/
---


#### Description

> 지정된 행의 rowState를 변경한다.


#### Syntax

> function setRowState(row, state, force)

#### Parameters

> **row**  
> Type: Number  
> 변경하려는 row를 지정한다.  

> **state**  
> Type:RealGrids.RowState  
> 지정하지 않으면 "none"이다.  

> **force**  
> Type: Boolean  
> 지정하지 않으면 false이다.  


#### Return value

> None.  

#### Example

<pre class="prettyprint">
    provider.setRowState(1, "none", false);
</pre>

