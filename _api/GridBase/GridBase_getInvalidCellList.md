---
layout: apipost
title: getInvalidCellList
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getInvalidCellList/
jsonly: true
versions:
  - JS 1.1.20+
tags: 
  - 검증
  - 일괄
  - 일괄검증
  - 값검증
  - validate
  - validation
---

#### Description

값 검증에 실패한 셀 정보들을 가져온다. 이 함수는 [gridBase.checkValidateCells()](/api/GridBase/checkValidateCells/)를 먼저 실행한 후 검증에 실패한 데이터를 수정 후 다시 검증할 때 사용한다.      

#### Syntax

> function getInvalidCellList()

#### Parameters

> None.
 

#### Return value

> Type: Array of Object  
> 검증에 실패한 셀 정보들이 반환된다.     

#### Examples 

<pre class="prettyprint">
var failData = gridView.getInvalidCellList();
</pre>

