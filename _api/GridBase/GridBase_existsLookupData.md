---
layout: apipost
title: existsLookupData
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/existsLookupData/
tags:
  - lookup
---


#### Description

> 지정된 lookupsource에 지정된 키가 존재하는지 확인한다.  

#### Syntax

> function existsLookupData(sourceId, keys)  

#### Parameters

> **sourceId**  
> Type: string  
> lookupSource의 Id  

> **keys**  
> Type: String \| Array of String  
> 찾을 키값  


#### Return value

> Boolean

#### Examples 

<pre class="prettyprint">
	var dataRow = gridView.getCurrent().dataRow;
	var comp = dataProvider.getValue(dataRow, "company");
	
	var isExist = gridView.existsLookupData("compGender", comp);
	
	if (isExist) {
		alert("있음");
	}
	else {
		alert("없음");
	}
</pre>

#### See Also
> [setLookups](/api/GridBase/setLookups), [addLookupSource](/api/GridBase/addLookupSource), [clearLookupData](/api/GridBase/clearLookupData), [fillLookupData](/api/GridBase/fillLookupData), [removeLookupSource](/api/GridBase/removeLookupSource)