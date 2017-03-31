---
layout: apipost
title: getModelsOfRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getModelsOfRows/
tags:
  - model
  - itemModel
---


#### Description

 dataRow들에 해당하는 아이템모델을 리턴한다.   

#### Syntax

> function getModelsOfRows(dataRows, extended)  

#### Parameters

> **dataRows**  
> Type: Array of Number  
> data의 행번호들  

> **extended**  
> Type: Boolean  
> 확장정보 포함 여부  

#### Return value

> Type: Object  
> Item Model 객체들  

#### Examples 

<pre class="prettyprint">
var extended = $("#chkExtendedModel").is(":checked");
var dataRows = [0, 1, 2, 3, 4];
var items = gridView.getModelsOfRows(dataRows, extended);
console.log(JSON.stringify(items));
</pre>

---

#### API Links

* [Grid Item](/api/features/Grid%20Item/)  

#### Demo Links

* [ItemModelAPI](http://demo.realgrid.com/RowGroup/ItemModelApi)