---
layout: apipost
title: getRowId
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getRowId/
deprecated: true
---


#### Description

> deprecated 대상.  
> getRowId는 더이상 사용되지 않습니다. [getDataRow](/api/GridBase/getDataRow/)를 사용하세요  
> [Grid Item](/api/features/Grid Item/)에 연결된 Data 행의 인덱스를 반환한다.   	

#### Syntax

> function getRowId(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템 인덱스  

#### Return value

> Type: Number  
> 아이템에 연결된 데이터 행의 인덱스.  

#### Examples 

<pre class="prettyprint">

var itemIndex = grid.getCurrent().itemIndex;
var dataRow = grid.getRowId(itemIndex);

</pre>




