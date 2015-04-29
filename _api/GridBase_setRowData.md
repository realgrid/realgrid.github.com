---
layout: apipost
title: setRowData
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setRowData/
---


#### Description

> [Grid Item](/api/GridBase/)에 연결된 데이터 행의 값들을 변경한다. values에는 Json 객체로 필드들의 값을 전달해야 한다.
> values에 포함되지 않은 필드의 값은 변경되지 않는다.

#### Syntax

> function setRowData(itemIndex, values)

#### Parameters

> *itemIndex*
> Type: Number
> 아이템 인덱스

> *values*
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




