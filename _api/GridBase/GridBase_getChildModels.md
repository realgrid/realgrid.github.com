---
layout: apipost
title: getChildModels
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getChildModels/
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


#### Example

<pre class="prettyprint">
	var itemIndex = grdMain.getCurrent().itemIndex;
	var model = grdMain.getModelAs(itemIndex, "group");
	
	var childModels = grdMain.getChildModels(model);
</pre>

