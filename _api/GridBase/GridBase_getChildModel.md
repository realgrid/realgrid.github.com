---
layout: apipost
title: getChildModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getChildModel/
tags:
  - model
  - itemModel
---


#### Description

 아이템 모델의 자식 아이템 모델을 리턴합니다.  

#### Syntax

> function getChildModel (model, index)  

#### Parameters

> **model**  
> Type: Object  
> Parent Model  

> **index**  
> Type: Number  
> 가져올 child model의 index  


#### Return value

> Type: Object  
> Item Model 객체.  


#### Examples 

<pre class="prettyprint">
var itemIndex = gridView.getCurrent().itemIndex;
var model = gridView.getModel(itemIndex);
if (model && model.type==="group") {
	var childModel = gridView.getChildModel(model, 0);
}
</pre>

---

#### Demo Links

* [ItemModel Demo](http://demo.realgrid.com/RowGroup/ItemModelApi)