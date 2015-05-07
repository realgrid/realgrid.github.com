---
layout: apipost
title: getAncestors
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getAncestors/
---


#### Description

> 모든 조상 행들의 rowId를 가져온다.

#### Syntax

> function getAncestors(rowId)

#### Parameters

> **rowId**
> Type: Number
> Row Id

#### Return value

> Type: Array of Number.
> 배열로 만들어진 Row Id들의 목록.

#### Example

<pre class="prettyprint">
    var curr = treeMain.getCurrent();
    if (!curr) {
        alert('조상들을 가져올 행을 선택하십시오.');
        return;
    }
 
    var rowId = curr.dataRow;
    var rows = dataProvider.getAncestors(rowId);
 
    console.log("Ancestors: " + rows);
</pre>
