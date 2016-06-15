---
layout: apipost
title: getJsonRow
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/getJsonRow/
tags:
  - json데이터 가져오기
  - 데이터행 가져오기
  - json객체
---


#### Description

 지정한 데이터행을 JSON 객체로 가져온다.

#### Syntax

> function getJsonRow(row)

#### Parameters

> **row**  
> Type: number  
> 행 번호

#### Return value

> Type: Object.  
> JSON 객체로 만들어진 데이터행.  

#### Examples 

<pre class="prettyprint">
var row = dataProvider.getJsonRow(10);
</pre>


