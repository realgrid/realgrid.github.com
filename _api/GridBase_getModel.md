---
layout: apipost
title: getModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getModel/
---


#### Description

> 아이템 index에 해당하는 아이템모델을 리턴한다. 

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

#### Example

<pre class="prettyprint">
    var extended = $("#chkExtendedModel").is(":checked");
    var itemIndex = grdMain.getCurrent().itemIndex;
    var item = grdMain.getModel(itemIndex, extended);
    console.log(JSON.stringify(item));
</pre>




