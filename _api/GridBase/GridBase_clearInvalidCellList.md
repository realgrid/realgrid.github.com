---
layout: apipost
title: clearInvalidCellList
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearInvalidCellList/
jsonly: true
versions:
  - JS 1.1.25+
tags: 
  - 검증
  - 일괄
  - 일괄검증
  - 값검증
  - validate
  - validation
  - 삭제
  - clear
---

#### Description

값 검증에 실패한 셀 정보들을 삭제한다. 이 함수는 [gridBase.checkValidateCells()](/api/GridBase/checkValidateCells/)를 먼저 실행한 후 가져온 검증에 실패한 데이터의 목록을 지울때 사용한다.      

#### Syntax

> function clearInvalidCellList()

#### Parameters

> None.
 

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.checkValidateCells();

gridView.clearInvalidCellList();
</pre>

