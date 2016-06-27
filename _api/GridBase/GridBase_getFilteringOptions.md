---
layout: apipost
title: getFilteringOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getFilteringOptions/
tags:
  - filterOption
  - filter
---


#### Description

 그리드 필터링과 관련된 설정 정보들을 가져온다. [FilteringOptions](/api/types/FilteringOptions/)이 설정 모델이다.

#### Syntax

> function getFilteringOptions()

#### Parameters

> None

#### Return value

> Type: object  
> [FilteringOptions](/api/types/FilteringOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
var options = gridView.getFilteringOptions();
if (options) {
	alert(JSON.stringify(options));
}
</pre>

---

#### API Links

* [setFilteringOptions](/api/GridBase/setFilteringOptions)  

#### Demo Links

* [Column Filtering](http://demo.realgrid.com/Demo/ColumnFiltering)