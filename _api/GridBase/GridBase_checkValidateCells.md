---
layout: apipost
title: checkValidateCells
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkValidateCells/
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

입력시 검증하는 것이 아닌 그리드에 있는 데이터들을 대상으로 일괄로 검증을 수행한다.  
column validation을 사용하여 검증을 수행하며 row validation은 지원하지 않는다.     

#### Syntax

> function checkValidateCells(itemIndices)

#### Parameters

> **itemIndices**  
> Type: Array of Number  
> 그리드의 행 번호들, 지정하지 않으면 그리드 전체 행을 대상으로 검증을 수행한다.   
 

#### Return value

> Type: Array of Object  
> 검증에 실패한 셀 정보들이 반환된다.     

#### Examples 

<pre class="prettyprint">
var failData = gridView.checkValidateCells();
</pre>

