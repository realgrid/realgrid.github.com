---
layout: apipost
title: getRowState
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getRowState/
---


#### Description

> 매개변수로 지정한 행의 RowState를 가져온다.

#### Syntax

> function getRowState(row)

#### Parameters

> **row**  
> Type: number  
> 행 번호.  

#### Return value

> Type: string  
> 행 상태 이름.  

#### Example

<pre class="prettyprint">
    var state = provider.getRowState(10);
</pre>


