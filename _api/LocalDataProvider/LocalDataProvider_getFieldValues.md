---
layout: apipost
title: getFieldValues
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/getFieldValues/
tags:
  - 데이터 범위
  - 시작 행
  - 끝 행
  - 데이터 목록
  - 필드 데이터
  - startRow
  - endRow
---


#### Description

> 지정한 필드의 데이터를 지정한 범위에 맞게 객체의 배열로 가져온다.

#### Syntax

> function getFieldValues(field, startRow, endRow)

#### Parameters

> **startRow**  
> Type: number  
> 시작 행 번호

> **endRow**  
> Type: number  
> 끝 행 번호. 0보다 작은 값이면 마지막 행까지 가져온다.

#### Return value

> Type: Array of object.  
> 객체로 만들어진 지정한 필드의 데이터 목록.

#### Example

<pre class="prettyprint">
    dataProvider.getFieldValues("userid", 0, 1)
</pre>


