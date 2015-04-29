---
layout: apipost
title: insertRow
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/insertRow/
---


#### Description

> 
> 

#### Syntax

> function insertRow(row, values)

#### Parameters

> *row*
> Type: number
> 삽입할 시작 데이터행 인덱스.

> *values*
> Type: Array of value
> 입력할 값의 배열

#### Return value

> None.

#### Example

<pre class="prettyprint">
    values = [1,"가","A"];
    provider.insertRow(0, values);
</pre>

