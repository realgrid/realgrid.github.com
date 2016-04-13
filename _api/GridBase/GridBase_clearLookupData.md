---
layout: apipost
title: clearLookupData
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearLookupData/
tags:
  - lookup
  - lookupTree
---


#### Description

> 지정된 SourceId에 해당하는 lookup source를 clear한다.  

#### Syntax

> function clearLookupData(sourceId)  

#### Parameters

> **sourceId**  
> Type: String  
> LookupSource의 Id  

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.clearLookupData(sourceId)
</pre>

#### Demo Links
> [addLookupSource](/api/GridBase/addLookupSource), [setLookups](/api/GridBase/setLookups), [existsLookupData](/api/GridBase/existsLookupData), [removeLookupSource](/api/GridBase/removeLookupSource), [fillLookupData](/api/GridBase/fillLookupData)  
> [LookupTree](http://demo.realgrid.com/Demo/LookupTree)