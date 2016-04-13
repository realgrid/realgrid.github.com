---
layout: apipost
title: getEditingItem
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getEditingItem/
tags:
  - edit
  - 편집중인
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

#### Examples 

<pre class="prettyprint">
    var editItem = gridView.getEditingItem();
    if (editItem) {
        console.log("DataRow ==> ",editItem.dataRow, "  ItemIndex ==> ",editItem.itemIndex);
        console.log(editItem.values);
        /* values의 경우 현재 편집중인 row의 값들을 Object형태로 가져온다. 편집중인 셀의 값은 가져올수 없다. */
    }
</pre>

#### See Also
> [setValue](/api/GridBase/setValue), [getValue](/api/GridBase/getValue), [getValues](/api/GridBase/getValues)