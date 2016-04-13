---
layout: apipost
title: getModels
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getModels/
tags:
  - model
  - itemModel
---


#### Description

> 지정한 아이템 index들에 해당하는 아이템 모델들을 배열로 리턴한다.   

#### Syntax

> function getModels(itemIndices, extended)  

#### Parameters

> **itemIndices**  
> Type: Array of Number  
> 아이템 index들  

> **extended**  
> Type: Boolean  
> 확장정보 포함 여부  

#### Return value

> Type: Array of Object  
> Item Model 객체들  

#### Examples 

<pre class="prettyprint">
    var extended = true;
    var itemIndices = [0, 1, 2, 3, 4] 
    var items = gridView.getModels(itemIndices, extended);
    console.log(JSON.stringify(items));
</pre>

#### Demo Links
#### See Also

#### See Also
> [getModel](/api/GridBase/getModel), [getModelAs](/api/GridBase/getModelAs), [getParentModel](/api/GridBase/getParentModel)  
> [Grid Item](/api/features/Grid%20Item/)  
> [ItemModelAPI](http://demo.realgrid.com/Demo/ItemModelApi)