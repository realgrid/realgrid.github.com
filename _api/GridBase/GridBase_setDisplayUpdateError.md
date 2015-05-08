---
layout: apipost
title: setDisplayUpdateError
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setDisplayUpdateError/
---


#### Description

> 그리드 Update중 에러가 발생 했을때 RealGrids.onerror 콜백 호출된 이후 에러 메시지의 표시 여부를 설정한다.

#### Syntax

> function setDisplayUpdateError(displayError)

#### Parameters

> **displayError**  
> Type: boolean  
> Default: true  
> true이면 검은색 바탕의 에러메시지가 표시된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grdMain.setDisplayUpdateError(true);
</pre>




