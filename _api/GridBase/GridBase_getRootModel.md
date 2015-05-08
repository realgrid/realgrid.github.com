---
layout: apipost
title: getRootModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getRootModel/
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

#### Example

<pre class="prettyprint">
    var extended = $("#chkExtendedModel").is(":checked");
    var idx = grdMain.getCurrent();
    var item = grdMain.getModel(idx.itemIndex);
    var root = grdMain.getRootModel(item, extended);
    console.log(JSON.stringify(root));
    if (root) {
        idx.itemIndex = root.itemIndex;
        grdMain.setCurrent(idx);
    }
</pre>

