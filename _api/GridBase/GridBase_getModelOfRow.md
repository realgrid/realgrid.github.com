---
layout: apipost
title: getModelOfRow
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getModelOfRow/
tags:
  - model
  - itemModel
---


#### Description

> dataRow에 해당하는 아이템모델을 리턴한다.   

#### Syntax

> function getModelOfRow(dataRow, extended)  

#### Parameters

> **dataRow**  
> Type: Number  
> data의 행번호  

> **extended**  
> Type: Boolean  
> 확장정보 포함 여부  

#### Return value

> Type: Object  
> Item Model 객체  

##### Examples 

<pre class="prettyprint">
    var extended = true;
    var dataRow = gridView.getCurrent().dataRow;
    var item = gridView.getModelOfRow(dataRow, extended);
    console.log(JSON.stringify(item));
</pre>

#### See Also
> [Grid Item](/api/features/Grid%20Item/)  
> [ItemModelAPI](http://demo.realgrid.com/Demo/ItemModelApi)
