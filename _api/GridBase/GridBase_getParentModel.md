---
layout: apipost
title: getParentModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getParentModel/
tags:
  - model
  - itemModel
---


#### Description

 아이템 모델의 부모 아이템 모델을 리턴합니다.    

#### Syntax

> function getParentModel(model, extended)    

#### Parameters

> **model**    
> Type: Object    
> 아이템 모델    

> **extended**    
> Type: Boolean    
> 확장정보 포함 여부    

#### Return value

> Type: Object    
> Item Model 객체    

#### Examples 

<pre class="prettyprint">
var extended = $("#chkExtendedModel").is(":checked");
var idx = gridView.getCurrent();
var item = gridView.getModel(idx.itemIndex);
var parent = gridView.getParentModel(item,extended);
console.log(JSON.stringify(parent));
if (parent) {
    idx.itemIndex = parent.itemIndex;
    gridView.setCurrent(idx);
}
</pre>

---

#### API Links

* [getModel](/api/GridBase/getModel)
* [getChildModel](/api/GridBase/getChildModel)

#### Demo Links

* [ItemModelAPI](http://demo.realgrid.com/RowGroup/ItemModelApi)