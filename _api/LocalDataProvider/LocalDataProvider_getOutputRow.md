---
layout: apipost
title: getOutputRow
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/getOutputRow/
tags: 
  - 지정형식 데이터 가져오기
  - json객체 데이터행
  - json객체로 가져오기
---


#### Description

> 지정한 데이터행을 형식을 적용하여 JSON 객체로 가져온다.

#### Syntax

> function getOutputRow(options, row)

#### Parameters

> **options**  
> Type: [DataOutputOptions](/api/types/DataOuptputOptions/)  
> datetime, boolean 필드에 대해 변환 형식을 지정한다.  

> **row**  
> Type: number  
> 행 번호

#### Return value

> Type: Object.  
> JSON 객체로 만들어진 데이터행.  

##### Examples 

<pre class="prettyprint">
    var row = provider.getOutputRow({datetimeFormat: "yyyyMMdd"}, 10);
</pre>


