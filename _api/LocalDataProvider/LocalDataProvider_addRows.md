---
layout: apipost
title: addRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/addRows/
---


#### Description

> 마지막 데이터행 다음 부터 하나 이상의 행을 추가한다.

#### Syntax

> function addRows(rows, start, count, rowEvents)

#### Parameters

> **rows**
> Type: Array of (Array \| Object)
> 행들의 배열. 각 행의 값은 배열이나 json 객체.

> **start**
> Type: number
> rows에 지정된 배열 중에서 시작 위치. 지정하지 않으면 0.

> **count**
> Type: number
> rows에 지정된 배열 중 추가할 행의 개수. -1이면 모든 행. 지정하지 않으면 -1.

> **rowEvents**
> Type: Boolean
> true면 행 단위로 추가 이벤트가 발생하고, false면 복수행 추가 이벤트가 한 번 발생한다. 지정하지 않으면 false다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var rows = [], {}, []...];
    dataProvider.addRows(rows, 0, -1);
</pre>
