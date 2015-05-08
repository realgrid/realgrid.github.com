---
layout: apipost
title: setValue
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setValue/
---


#### Description

> [Grid Item](/api/features/Grid_item) 인덱스와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 변경한다.

#### Syntax

> function setValue(itemIndex, field, value)

#### Parameters

> **itemIndex**
> Type: Number
> 아이템 인덱스

> **field**
> Type: Number
> 필드 인덱스

> **value**
> Type: ** 
> 필드에 설정할 값

#### Return value

> None

#### Example

<pre class="prettyprint">
    var itemIndex = grid.getCurrent().itemIndex;
    var value = $("#name").val();
    grid.setValue(itemIndex, 1, value);

</pre>




