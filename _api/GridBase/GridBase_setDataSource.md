---
layout: apipost
title: setDataSource
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setDataSource/
jsonly: true
---


#### Description

> 그리드에 [Data Provider](/api/LocalDataProvider/)를 연결한다.

#### Syntax

> function setDataSource(provider)

#### Parameters

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> Data Provider  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    dataProvider = new RealGridJS.LocalDataProvider();
    grdMain = new RealGridJS.GridView("realgrid");
    grdMain.setDataSource(dataProvider);	
</pre>




