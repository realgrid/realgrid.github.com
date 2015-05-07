---
layout: apipost
title: getEditingItem
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getEditingItem/
---


#### Description

> 그리드가 편집중인 item의 정보를 가져온다.

#### Syntax

> function getEditingItem();

#### Parameters

> none

#### Return value

> Type: Object
> 편집중인 그리드 item의 정보. 편집중이 아닌경우 null이 출력된다.

#### Example

<pre class="prettyprint">
    var edtItem = grdMain.getEditingItem();
    console.log("DataRow ==> ",edtItem.dataRow, "  ItemIndex ==> ",edtItem.itemIndex);
    console.log(edtItem.values);
</pre>
