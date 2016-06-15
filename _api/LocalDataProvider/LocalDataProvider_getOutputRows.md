---
layout: apipost
title: getOutputRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/getOutputRows/
tags: 
  - 지정한 범위
  - json객체의 배열
  - 데이터행들의 목록
  - 지정형식 데이터 가져오기
---


#### Description

 지정한 범위 내의 데이터행들을 형식을 지정하여 JSON 객체의 배열로 가져온다.

#### Syntax

> function getOutputRows(optinos, startRow, endRow)  

#### Parameters

> **options**  
> Type: [DataOutputOptions](/api/types/DataOuptputOptions/)  
> datetime, boolean 필드에 대해 변환 형식을 지정한다.  

> **startRow**  
> Type: number  
> 시작 행 번호  

> **endRow**  
> Type: number  
> 끝 행 번호. 0보다 작은 값이면 마지막 행까지 가져온다.  

#### Return value

> Type: Array of object.  
> JSON 객체로 만들어진 데이터행들의 목록.

#### Examples 

<pre class="prettyprint">
var rows = dataProvider.getOutputRows({datetimeFormat: "yyyyMMdd"}, 10, 19);
</pre>


