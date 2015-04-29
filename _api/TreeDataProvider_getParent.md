---
layout: apipost
title: getParent
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getParent/
---


#### Description

> 지정한 데이터 행의 부모 rowId를 가져온다.

#### Syntax

> function getParent(rowId)

#### Parameters

> *rowId*
> Type: Number
> Row Id

#### Return value

> Type: Number.
> 부모 행의 Row Id.

#### Example

<pre class="prettyprint">
	var curr = treeMain.getCurrent();
	if (!curr) {
		alert('부모를 가져올 자식 행을 선택하십시오.');
		return;
	}
	var rowwId = curr.dataRow;
 
    var row = dataProvider.getParent(rowId);
 
    console.log("Parent: " + row);
</pre>
