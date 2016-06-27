---
layout: apipost
title: onShowEditor
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onShowEditor/
tags:
  - editor
  - event
---


#### Description

 Cell별로 Editor의 표시여부를 임의로 변경하기 위해서 사용한다.  
 false 를 return하면 Editor가 표시되지 않는다.

#### Syntax

> function onShowEditor (id, index)  

#### Arguments

> **id**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object.  
> 편집기가 열리려는  인덱스 정보

#### Return

> Type: Boolean
> Default: true
> false 를 리턴하면 Editor가 표시되지 않는다.  

#### Examples 

<pre class="prettyprint">
gridView.onShowEditor = function (id, index) { 
	console.log("onShowEditor:" + index.itemIndex + "," + index.column);  

	if (index.column == "OrderID") then
	{
		return false;  
    }

}
</pre>

---

#### API Links

* [onHideEditor](/api/GridBase/onHideEditor)