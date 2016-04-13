---
layout: apipost
title: getRootModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getRootModel/
tags:
  - model
  - itemModel
  - rootModel
---


#### Description

> 아이템 모델의 최상위 조상 아이템 모델을 리턴합니다.  

#### Syntax

> function getRootModel(model, extended)  

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
    var root = gridView.getRootModel(item, extended);
    console.log(JSON.stringify(root));
    if (root && root.itemIndex >= 0) {
        idx.itemIndex = root.itemIndex;
        gridView.setCurrent(idx);
    }
</pre>

#### See Also
> [getParentModel](/api/GridBase/getParentModel)