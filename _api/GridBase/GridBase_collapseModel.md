---
layout: apipost
title: collapseModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/collapseModel/
---


#### Description

> 지정한 그룹아이템 모델을 축소한다. recursive를 true로 하면 그룹에 포함된 자손그룹들도 축소된다. 

#### Syntax

> function collapseModel(model, recursive)

#### Parameters

> **model**
> Type: Object
> 축소하려는 그룹아이템 모델을 입력한다.

> **recursive**
> Type: boolean
> Default: false
> true로 입력하면 자손그룹들도 모두 축소된다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var aModel = grdMain.getModel(0); 
    grdMain.collapseModel(aModel, true);
</pre>

