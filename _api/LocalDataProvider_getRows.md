---
layout: apipost
title: getRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/getRows/
---


#### Description

> 지정한 범위 내의 데이터행들을 배열의 배열로 가져온다.

#### Syntax

> function getRows(startRow, endRow)

#### Parameters

> *startRow*
> Type: number
> 시작 행 번호

> *endRow*
> Type: number
> 끝 행 번호. 0보다 작은 값이면 마지막 행까지 가져온다.

#### Return value

> Type: Array of object.
> 배열로 만들어진 데이터행들의 목록.

#### Example

<pre class="prettyprint">
    var rows = provider.getRows(10, 19);
</pre>


