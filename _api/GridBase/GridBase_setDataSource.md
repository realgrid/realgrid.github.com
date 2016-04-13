---
layout: apipost
title: setDataSource
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setDataSource/
jsonly: true
tags:
  - dataProvider
  - DataSource
  - Data
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

#### Examples 

<pre class="prettyprint">
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);	
</pre>

#### Demo Links
#### See Also

#### See Also
> [Data Loading](/tutorial/a24/)