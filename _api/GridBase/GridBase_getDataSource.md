---
layout: apipost
title: getDataSource
part: Objects
objectname: GridBase
directiontype: Function
jsonly: true
permalink: /api/GridBase/getDataSource/
tags:
  - dataSource
  - dataProvider
---


#### Description

> 그리드에 연결되어 있는 [DataProvider](/api/DataProvider/)를 반환한다.

#### Syntax

> function getDataSource()  

#### Parameters

> None.  

#### Return value

> Type: [DataProvider](/api/DataProvider/)  
> DataProvider 객체.  

#### Examples 

<pre class="prettyprint">
var provider = grid.getDataSource();
</pre>

#### See Also
> [setDataSource](/api/GridBase/setDataSource)