---
layout: apipost
title: setValue
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setValue/
---


#### Description

> row 인덱스와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 변경한다.

#### Syntax

> function setValue(row, field, value)

#### Parameters

> **row**
> Type: Number
> 아이템 인덱스

> **field**
> Type: Number\|String
> 필드 인덱스또는 FieldName

> **value**
> Type: ** 
> 필드에 설정할 값

#### Return value

> None

#### Example

<pre class="prettyprint">
    var dataRow = grid.getCurrent().dataRow;
    var value = $("#name").val();
    dataProvider.setValue(dataRow, 1, value);

</pre>
