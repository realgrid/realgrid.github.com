---
layout: apipost
title: insertRow
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/insertRow/
---


#### Description

> LocalDataProvider의 특정 행 위치에 새로운 행을 삽입한다. 추가하기 직전에 [onRowInserting](/api/LocalDataProvider/onRowInserting/), 호출된 후 [onRowInserted](/api/LocalDataProvider/onRowInserted/), [onRowCountChanged](/api/LocalDataProvider/onRowCountChanged/) 이벤트가 순서대로 발생한다.

#### Syntax

> function insertRow(row, values)

#### Parameters

> **row**  
> Type: number  
> 삽입할 시작 데이터행 인덱스.

> **values**  
> Type: Array of value  
> 입력할 값의 배열

#### Return value

> None.

#### Example

<pre class="prettyprint">
    values = [1,"가","A"];
    provider.insertRow(0, values);
</pre>

