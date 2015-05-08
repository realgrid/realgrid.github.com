---
layout: apipost
title: setThrowUpdateError
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setThrowUpdateError/
---


#### Description

> 그리드 Update중 에러가 발생 했을때 RealGrids.onerror 콜백 호출된 이후 UI의 계속 진행 여부를 설정한다.

#### Syntax

> function setThrowUpdateError(throwError)

#### Parameters

> **throwError**  
> Type: boolean  
> Default: true  
> true이면 UI가 더 이상 진행되지 않는다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grdMain.setThrowUpdateError(true);
</pre>




