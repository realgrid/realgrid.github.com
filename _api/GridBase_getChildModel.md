---
layout: apipost
title: getChildModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getChildModel/
---


#### Description

> 아이템 모델의 자식 아이템 모델을 리턴합니다.

#### Syntax

> function getChildModel (model, index)

#### Parameters

> *model*
> Type: Object
> Parent Model

> *index*
> Type: Number
> 가져올 child model의 index


#### Return value

> Type: Object
> Item Model 객체.


#### Example

<pre class="prettyprint">
	var itemIndex = grdMain.getCurrent().itemIndex;
	var model = grdMain.getModelAs(itemIndex, "group");
	
	var childModel = grdMain.getChildModel(model, 1);
</pre>

