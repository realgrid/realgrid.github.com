---
layout: apipost
title: getRowStateCount
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getRowStateCount/
tags:
  - 해당 상태 개수
  - rowState 가져오기
---


#### Description

> 지정된 rowStates에 해당하는 Row의 건수를 가져온다.


#### Syntax

> function getRowStateCount(rowStates)

#### Parameters


> **rowStates**  
> Type: [RealGrids.rowState](/api/types/RowState/)\|string\|array of string  
> 가져올려는 rowState를 지정한다.  


#### Return value

> Number  
> 지정된 rowStates에 해당하는 Row의 건수들 이다.  

#### Example

<pre class="prettyprint">
    var cnt = provider.getRowStateCount("created");
    var cnt = provider.getRowStateCount(RealGrids.rowState.CREATED);
</pre>

