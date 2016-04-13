---
layout: apipost
title: hideToast
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/hideToast/
tags:
  - toast
  - busyIndiator
---


#### Description

> Toast 팝업 창을 숨긴다. RealGridJS에서 사용가능하다.  

#### Syntax

> function hideToast(action)  

#### Parameters

> **action**  
> Type: function  
> toast창을 숨긴 뒤 수행할 콜백함수를 지정한다.    

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.hideToast(function(){gridView.setValue(0,0,"toast 종료")});
</pre>

#### Demo Links
> [showToast](/api/GridBase/showToast)