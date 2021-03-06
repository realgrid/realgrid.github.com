---
layout: apipost
title: getGroupModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getGroupModel/
tags:
  - model
  - itemModel
---


#### Description

 아이템 index에 해당하는 그룹모델을 리턴한다.   

#### Syntax

> function getGroupModel(itemIndex, extended)  

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
var item = gridView.getGroupModel(itemIndex, extended);
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