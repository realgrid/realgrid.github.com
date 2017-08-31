---
layout: apipost
title: searchDataRow
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/searchDataRow/
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

> function searchDataRow(options)

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
function searchHandler() {
	var options = {
		parentId: 0,
		startIndex: 0,
	    fields: ['field1', 'field2'],
	    values: ['value1', 'value2']
	}
	var dataRow = treeDataProvider.searchDataRow(options);
}
</pre>

---

#### API Links
