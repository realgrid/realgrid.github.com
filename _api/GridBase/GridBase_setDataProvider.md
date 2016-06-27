---
layout: apipost
title: setDataProvider
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setDataProvider/
tags:
  - dataSource
  - dataProvider
---


#### Description

 그리드에 [Data Provider](/api/LocalDataProvider/)를 연결한다.

#### Syntax

> function setDataProvider(provider)

#### Parameters

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> Data Provider  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var gridView = new RealGrids.GridView(id);
var dataProvider = new RealGrids.LocalDataProvider();
var gridView.setDataProvider(dataProvider);
</pre>




