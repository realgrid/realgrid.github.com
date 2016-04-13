---
layout: apipost
title: insertRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/insertRows/
tags:
  - 특정 행 추가
  - 새로운 행 추가
  - 새로운 행 삽입
  - 특정 위치 행 삽입
  - 여러행 값 추가
  - 지정한 데이터행
---


#### Description

> 지정한 데이터행 위치에 한 행 이상의 값을 삽입한다.

#### Syntax

> function insertRows(row, rows, start, count, rowEvents)

#### Parameters

> **row**  
> Type: number  
> 삽입할 시작 데이터행 인덱스.

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
> Default: true  
> false면 상태 변경 이벤트를 발생시키지 않는다. 

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    dataProvider.insertRows(row, rows, 0, -1);
</pre>

