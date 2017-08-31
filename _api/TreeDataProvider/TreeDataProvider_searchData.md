---
layout: apipost
title: searchData
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/searchData/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - search
  - 찾기
---


#### Description

 지정한 필드들의 값에 해당하는 셀을 찾아 dataRow를 반환한다.  

#### Syntax

> function searchData(options)

#### Parameters

> **options**  
> Type: object  
> [SearchOptions](/api/types/SearchOptions/) 모델로 지정한다.
> SearchOptions 속성중 select는 사용되지 않는다.  

#### Return value

> Type: number  
> 검색된 dataRow가 반환된다.  

#### Examples 

<pre class="prettyprint">
var ret = tpMain.searchData({fields:["area1name", "area3name"], value:"원삼면", wrap:true});
if (ret) {
	var rowId = ret.dataRow;
	var parents = tpMain.getAncestors(rowId);
	if (parents) {
		for (var i = parents.length - 1; i >= 0 ; i--) {
			tree.grid.expand(tree.grid.getItemIndex(parents[i]));
		}
		tree.grid.setCurrent({itemIndex:tree.grid.getItemIndex(rowId), fieldIndex:ret.fieldIndex})
	}
}
</pre>

---

#### API Links
