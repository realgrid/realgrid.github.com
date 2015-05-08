---
layout: apipost
title: removeLookupSource
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/removeLookupSource/
---


#### Description

> 지정한 룩업 소스를 삭제한다.

#### Syntax

> function removeLookupSource(sourceId)

#### Parameters

> **sourceId**  
> Type: String  
> 삭제할 룩업소스id  

#### Return value

> None

#### Example

<pre class="prettyprint">
    var sourceId= "empLookup";
    grdMain.removeLookupSource(sourceId);
</pre>
