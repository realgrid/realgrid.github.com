---
layout: apipost
title: getChildModels
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getChildModels/
tags:
  - model
  - itemModel
---


#### Description

> 아이템 모델의 자식 아이템 모델들을 리턴한다.  

#### Syntax

> function getChildModels (model)  

#### Parameters

> **model**  
> Type: Object  
> Parent Model  


#### Return value

> Type: Objects  
> Item Model 객체들.  


##### Examples 

<pre class="prettyprint">
	var itemIndex = gridView.getCurrent().itemIndex;
	var model = gridView.getModel(itemIndex);
	if (model && model.type==="group") {
	    var childModels = gridView.getChildModels(model);
	}
</pre>

#### See Also
> [ItemModel Demo](http://demo.realgrid.com/Demo/ItemModelApi)