---
layout: apipost
title: fillLookupData
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/fillLookupData/
tags:
  - lookup
  - lookupData
---


#### Description

 lookupSource에 lookupData를 추가한다.  

#### Syntax

> function fillLookupData (sourceId, data)  

#### Parameters

> **sourceId**  
> Type: String  
> LookupSource Id  

> **data**  
> Type: Object  
> LookupData Object  


#### Return value

> None.  


#### Examples 

<pre class="prettyprint">
gridView.fillLookupData("empLookup", {
    rows: [
        ["TOMSP", 5, "TOMSP_5X"], 
        ["TOMSP", 6, "TOMSP_6X"]
]});
</pre>

---

#### API Links

* [addLookupSource](/api/GridBase/addLookupSource/)
* [clearLookupData](/api/GridBase/clearLookupData/)
* [existsLookupData](/api/GridBase/existsLookupData/)
* [removeLookupSource](/api/GridBase/removeLookupSource/)
* [setLookups](/api/GridBase/setLookups/)