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

> function checkValidateCells(itemIndices, visibleOnly)

#### Parameters

> **itemIndices**  
> Type: Array of Number  
> 그리드의 행 번호들, null로 지정하면 그리드 전체 행을 대상으로 검증을 수행한다.   
 
<a name="visibleOnly"></a> 
> **visibleOnly**  
> Type: Boolean    
> Default: true    
> false이면 트리 그리드의 접혀있는 노드등 보이지 않는 행들도 검증 대상에 포함된다.        
> false는 전체 행을 체크하는 경우에만 적용된다.   
> RealGridJS 1.1.32 부터 지원한다.           

#### Return value

> Type: Array of Object  
> 검증에 실패한 셀 정보들이 반환된다.     

#### Examples 

<pre class="prettyprint">
var failData = gridView.checkValidateCells();
</pre>

