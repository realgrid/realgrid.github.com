---
layout: apipost
title: setRowState
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/setRowState/
tags:
  - rowState변경
  - 행 상태
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
> Defalut: "none"    
> 행 상태를 지정한다.  

> **force**  
> Type: Boolean  
> Default: false  
> dataProvider.options.checkStates의 값이 false 일 경우 행 상태의 강제 지정 여부  


#### Return value

> None.  

#### Example

<pre class="prettyprint">
    provider.setRowState(1, "none", false);
</pre>

