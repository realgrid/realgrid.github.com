---
layout: apipost
title: getChildren
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getChildren/
---


#### Description

> 모든 자식 행들의 rowId를 가져온다.

#### Syntax

> function getChildren(rowId)

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
		alert('자식들을 가져올 부모 행을 선택하십시오.');
		return;
	}
	var rowwId = curr.dataRow;
 
    var rows = dataProvider.getChildren(rowId);
 
    console.log("Children: " + rows);
</pre>
