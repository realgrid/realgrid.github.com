---
layout: apipost
title: commit
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/commit/
tags:
  - editing
  - commit
---


#### Description

> 편집 중인 행의 편집을 완료하고 DataProvider에 저장한다.  

#### Syntax

> function commit(force)  

#### Parameters

> **force**  
> Type: boolean  
> true인 경우 입력/편집 중 편집을 취소한 행(RowState 변경은 없고, Indicator에 편집으로 표시된)을 commit 한다. 지정하지 않으면 false로 해석한다.  

#### Return value

> Type:boolean
> 데이터 변경이 발생한 경우 true가 반환된다. 

#### Examples 

<pre class="prettyprint">
    gridView.commit(false)
</pre>

#### Demo Links
> [cancel](/api/GridBase/cancel), [commitEditor](/api/GridBase/commitEditor)  