---
layout: apipost
title: toggleColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/toggleColumnFilters/
---


#### Description

> 해당 컬럼의 지정한 필터들을 토글한다.

#### Syntax

> function toggleColumnFilters(column, filterNames)

#### Parameters

> **column**  
> Type: Object  
> 컬럼 설정 정보

> **filterNames**  
> Type: Array of String  
> 토글할 필터들의 이름

#### Return value

> NONE

#### Example

<pre class="prettyprint">
    grdMain.toggleColumnFilters('CustomerID', ["VINET", "VICTE"]);
</pre>



