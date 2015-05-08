---
layout: apipost
title: getParentModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getParentModel/
---


#### Description

> 아이템 모델의 부모 아이템 모델을 리턴합니다.    

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

#### Example

<pre class="prettyprint">
    var extended = $("#chkExtendedModel").is(":checked");
    var idx = grdMain.getCurrent();
    var item = grdMain.getModel(idx.itemIndex);
    var parent = grdMain.getParentModel(item,extended);
    console.log(JSON.stringify(parent));
    if (parent) {
        idx.itemIndex = parent.itemIndex;
        grdMain.setCurrent(idx);
    }
</pre>




