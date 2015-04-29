---
layout: apipost
title: getFieldIndex
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getFieldIndex/
---


#### Description

> 매개변수로 지정된 필드명에 해당하는 필드의 인덱스를 가져온다. 대소문자를 가리지 않는다.

#### Syntax

> function getFieldIndex(fieldName)

#### Parameters

> Type: string
> 필드 이름.

#### Return value

> Type: number
> 필드 인덱스.

#### Example

<pre class="prettyprint">
    var fieldIndex = provider.getFieldIndex("field1");
</pre>


