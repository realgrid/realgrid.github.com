---
layout: apipost
title: removeLookupSource
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/removeLookupSource/
tags:
  - lookup
  - lookupSource
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

#### Examples 

<pre class="prettyprint">
    var sourceId= "empLookup";
    gridView.removeLookupSource(sourceId);
</pre>

#### Demo Links
> [addLookupSource](/api/GridBase/addLookupSource), [ColumnLookup Demo](http://demo.realgrid.com/Demo/ColumnLookup)