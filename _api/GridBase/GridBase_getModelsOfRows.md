---
layout: apipost
title: getModelsOfRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getModelsOfRows/
---


#### Description

> dataRow들에 해당하는 아이템모델을 리턴한다.   

#### Syntax

> function getModelsOfRow(dataRows, extended)  

#### Parameters

> **dataRow**  
> Type: Array of Number  
> data의 행번호들  

> **extended**  
> Type: Boolean  
> 확장정보 포함 여부  

#### Return value

> Type: Object  
> Item Model 객체들  

#### Example

<pre class="prettyprint">
    var extended = $("#chkExtendedModel").is(":checked");
    var dataRows = [0, 1, 2, 3, 4];
    var items = grdMain.getModelsOfRow(dataRows, extended);
    console.log(JSON.stringify(items));
</pre>




