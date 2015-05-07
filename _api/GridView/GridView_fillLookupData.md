---
layout: apipost
title: fillLookupData
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/fillLookupData/
---


#### Description

> lookupSource에 lookupData를 추가한다.

#### Syntax

> function fillLookupData(sourceId, data)

#### Parameters

> **sourceId**
> Type: String
> LookupSource Id

> **data**
> Type: Object
> LookupData Object


#### Return value

> None.


#### Example

<pre class="prettyprint">
    grdMain.fillLookupData("empLookup", {
        rows: [
            ["TOMSP", 5, "TOMSP_5X"], 
            ["TOMSP", 6, "TOMSP_6X"]
    ]});
</pre>

