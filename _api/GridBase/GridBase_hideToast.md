---
layout: apipost
title: hideToast
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/hideToast/
---


#### Description

> Toast 팝업 창을 표시한다.  

#### Syntax

> function hideToast(action)  

#### Parameters

> **action**  
> Type: function  
> toast창을 숨긴 뒤 수행할 콜백함수를 지정한다.    

#### Return value

> None.  

#### Example

<pre class="prettyprint">
    grdMain.hideToast(function(){grdMain.setValue(0,0,"toast 종료")});
</pre>

