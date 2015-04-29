---
layout: apipost
title: getStateRows
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getStateRows/
---


#### Description

> RowState 상태를 갖는 행의 번호들을 배열로 가져온다.

#### Syntax

> function getStateRows(rowState)

#### Parameters

> *rowState*
> Type: string
> 상태 이름.

#### Return value

> Type: Array of number
> 행 번호 배열

#### Example

<pre class="prettyprint">
    var rows = provider.getStateRows("deleted");
</pre>


