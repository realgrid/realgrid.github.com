---
layout: apipost
title: getModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getModel/
tags:
  - model
  - itemModel
---


#### Description

 아이템 index에 해당하는 아이템모델을 리턴한다.   

#### Syntax

> function getModel(itemIndex, extended)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템의 index  

> **extended**  
> Type: Boolean  
> 확장정보 포함 여부  

#### Return value

> Type: Object  
> Item Model 객체  

#### Examples 

<pre class="prettyprint">
var extended = true;
var itemIndex = gridView.getCurrent().itemIndex;
var item = gridView.getModel(itemIndex, extended);
console.log(JSON.stringify(item));
</pre>

---

#### API Links

* [getModelAs](/api/GridBase/getModelAs)
* [getModelOfRow](/api/GridBase/getModelOfRow)
* [getModels](/api/GridBase/getModels)
* [getParentModel](/api/GridBase/getParentModel)   
* [Grid Item](/api/features/Grid%20Item/)  

#### Demo Links

* [ItemModelAPI](http://demo.realgrid.com/RowGroup/ItemModelApi)