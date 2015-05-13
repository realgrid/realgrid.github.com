---
layout: apipost
title: setRowData
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setRowData/
deprecated: true
---


#### Description

> deprecated 대상입니다.    
> [GridBase.setValues](/api/GridBase/setValues/)를 사용하세요  

#### Syntax

> function setRowData(itemIndex, values)

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템 인덱스  

> **values**  
> Type: Object  
> 필드들의 값을 Json 객체로 전달  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var itemIndex = grid.getCurrent().itemIndex;
    var values = {
        "field1": "value1",
        "field2": value2
    };
    grid.setRowData(itemIndex, values);
</pre>




