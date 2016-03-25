---
layout: apipost
title: setRowStates
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/setRowStates/
tags:
  - 다중rowState 변경
  - 여러 행 상태 변경
---


#### Description

> 복수개의 rowState를 변경한다.

#### Syntax

> function setRowStates(rows, state, force, rowEvents)

#### Parameters

> **rows**  
> Type: Array of integer  
> 상태를 변경하려는 dataRow 배열이다.  

> **state**  
> Type: [RealGrids.RowState](/api/types/RowState/)  
> 변경하려는 rowState를 지정한다. 지정하지 않으면 "none"이다.  

> **force**  
> Type: boolean  
> 지정하지 않으면 "false"이다.  

> **rowEvents**  
> Type: boolean  
> true이면 상태가 변경되는 횟수만큼 onRowStateChanged 이 호출되고 false이면 onRowStatesChanged 가 한번 호출된다. 지정하지 않으면 false다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var rows = grid.getCheckedRows();
    provider.setRowStates(rows, "none", false, false);
</pre>

