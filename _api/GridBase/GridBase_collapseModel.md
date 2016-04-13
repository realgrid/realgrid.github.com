---
layout: apipost
title: collapseModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/collapseModel/
tags:
  - model
  - collapseModel
  - parentModel
---


#### Description

> rowGrouping 상태일때 지정한 그룹아이템 모델을 축소한다. recursive를 true로 하면 그룹에 포함된 자손그룹들도 축소된다.

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

#### Examples 

<pre class="prettyprint">
    var aModel = gridView.getModel(0); 
    if (aModel.type === "group") {
    	gridView.collapseModel(aModel, true); 
    }
    else {
    	gridView.collapseModel(gridView.getParentModel(aModel), true);
    }
</pre>

#### See Also
> [getModel](/api/GridBase/GetModel), [expandModel](/api/GridBase/expandModel)  
> [ItemMoelApi](http://demo.realgrid.com/Demo/ItemModelApi)
