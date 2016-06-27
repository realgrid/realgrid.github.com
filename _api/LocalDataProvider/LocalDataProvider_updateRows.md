---
layout: apipost
title: updateRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/updateRows/
tags:
  - 값 수정
  - 지정한 행부터
  - 지정한 값으로 변경
  - Array값
  - object값
  - onRowStateChanged
  - rowEvents
---


#### Description

> 지정한 데이터행으로 부터 한 행 이상의 값을 수정한다.

#### Syntax

> function updateRows(row, rows, start, count, rowEvents)

#### Parameters

> **row**  
> Type: number  
> 수정할 시작 데이터행 인덱스.

> **rows**  
> Type: Array of Array \| object  
> 값들의 배열. 각 행의 값은 Array이나 object.

> **start**  
> Type: number  
> Default: 0  
> rows에 지정된 배열 중에서 시작 위치.

> **count**  
> Type: number  
> Default: -1 (모든 행)  
> rows에 지정된 배열 중 수정할 행의 개수.

> **rowEvents**   
> Type: Boolean  
> Default: false  
> true이면 [onRowStateChanged](/api/LocalDataProvider/onRowStateChanged/) 이벤트를 건별로 발생시킨다.  
> false이면 [onRowStatesChanged](/api/LocalDataProvider/onRowStatesChanged/) 이벤트를 한번만 발생시킨다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    dataProvider.updateRows(row, rows, 0, -1, false);
</pre>
