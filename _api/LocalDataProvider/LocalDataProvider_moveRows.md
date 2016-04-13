---
layout: apipost
title: moveRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/moveRows/
tags:
  - 이동
  - 여러개의 데이터 이동
  - 여러개의 데이터행 이동
  - 위치로 이동
  - 여러행 이동
  - newRow
---


#### Description

> 지정된 dataRow부터 지정된 개수만큼 newRow로 지정된 dataRow앞으로 이동한다.
> 

#### Syntax

> function moveRows(row, count, newRow)

#### Parameters

> **row**  
> Type: number  
> 이동시키려는 첫 dataRow를 지정한다.

> **count**  
> Type: number  
> 이동시킬 dataRow부터 몇개의 행을 이동시킬것인지 지정한다.

> **newRow**  
> Type: number  
> 이동될 dataRow를 지정한다.

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    provider.moveRows(10, 5,0); //10행부터 5개의 행을 0행으로 이동
</pre>

