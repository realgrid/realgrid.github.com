---
layout: apipost
title: getModelAs
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getModelAs/
---


#### Description

> 아이템 index와 itemType에 해당하는 아이템모델을 리턴한다. 
> 지정한 itemIndex에 해당하는 모델이 지정한 itemType과 맞지 않으면 null을 리턴한다.

#### Syntax

> function getModelAs(itemIndex, itemType, extended)

#### Parameters

> **itemIndex**
> Type: Number
> 아이템의 index

> **itemType**
> Type: Number
> 아이템의 type. "row", "group", "footer", "tree"를 지정할 수 있다.

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
    var group = grdMain.getModelAs(itemIndex, RealGrids.ItemType.GROUP);
    if (group && group.count > 0) {
        var item = grdMain.getChildModel(group, 0, extended);
        console.log(JSON.stringify(item));
    }
</pre>




