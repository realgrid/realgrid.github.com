---
layout: apipost
title: getFieldNames
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getFieldNames/
---


#### Description

> 그리드에 설정되어 있는 필드들의 이름을 배열로 가져온다. 필드명은 모두 대문자로 변경되어 저장된다. 원래 필드명 목록은 [DataProvider_getOrgFieldNames\|getOrgFieldNames](/api/DataProvider/) 함수로 가져올 수 있다.

#### Syntax

> function getFieldNames()

#### Parameters

None.

#### Return value

> Type: Array of string
> 필드 이름 배열.

#### Example

<pre class="prettyprint">
    var fieldNames = provider.getFieldNames();
</pre>

