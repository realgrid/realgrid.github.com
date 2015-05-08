---
layout: apipost
title: getOrgFieldNames
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getOrgFieldNames/
---


#### Description

> 그리드에 설정되어 있는 필드들의 이름을 배열로 가져온다. 필드명은 모두 대문자로 변경되어 저장된다. 이 함수로 설정 당시의 필드 이름 목록을 가져올 수 있다.  
>[DataProvider getFieldNames](/api/DataProvider/getFieldNames/)는 대문자로 치환된 필드 이름 목록을 가져온다.

#### Syntax

> function getOrgFieldNames()

#### Parameters

> None.

#### Return value

> Type: Array of string  
> 필드 이름 배열.

#### Example

<pre class="prettyprint">
    var fieldNames = provider.getOrgFieldNames();
</pre>


