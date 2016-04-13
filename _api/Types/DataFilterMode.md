---
layout: apipost
title: DataFilterMode
part: Types
typename: Constants
order: DataFilterMode
objectname: 
directiontype: 
permalink: /api/types/DataFilterMode/
tags:
  - filterMode
  - 필터모드
---

#### Description

> 필터의 동작 모드를 지정한다.
  
#### Members

> **AND**  
> Value: "and"  
> 모든 필터의 조건에 해당하는것만 표시된다.  

> **OR**  
> Value: "or"  
> 여러개의 필터중 하나의 필터라도 부합하면 나온다.  

#### Examples s  

<pre class="prettyprint">
	var filters = [
		"value['company'] = 'Mynte'",
		"value['gender'] = 'Female'"
	];
	
	var filterMode = "and";
	
	dataProvider.setFilters(filters, filterMode);	
	
	jsonData = "../../DemoData/defaultdemodata.json";
	$.getJSON(jsonData, {}, function(data) {
		dataProvider.setRows(data)
	});
</pre>


#### Demo Links

* [setFilters](/api/LocalDataProvider/setFilters/)   

