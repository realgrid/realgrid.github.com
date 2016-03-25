---
layout: apipost
title: getDataProvider
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getDataProvider/
tags:
  - dataProvider
---


#### Description

> 그리드에 연결되어 있는 [DataProvider](/api/DataProvider/)를 반환한다.  
> RealGridJS에서는 getDataSource()를 사용한다.

#### Syntax

> function getDataProvider()

#### Parameters

> None.

#### Return value

> Type: [DataProvider](/api/DataProvider/)  
> DataProvider 객체.

#### Example

<pre class="prettyprint">
var provider = gridView.getDataProvider();
</pre>

#### See Also
> [getDataSource](/api/GridBase/getDataSource)