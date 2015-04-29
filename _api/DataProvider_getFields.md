---
layout: apipost
title: getFields
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getFields/
---


#### Description

> 현재 DataProvider에 설정되어 있는 데이터필드 정보의 목록을 배열로 리턴한다.

#### Syntax

> function getFields()

#### Parameters

None.

#### Return value

> Type: array of object
> 배열의 각 항목은 [DataField](/api/DataProvider/)와 동일한 내용의 object다.

#### Example

<pre class="prettyprint">
    var fields = provider.getFields();
</pre>


