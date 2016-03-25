---
layout: apipost
title: getFieldName
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getFieldName/
tags:
  - 필드이름
  - 필드이름 가져오기
---


#### Description

> 매개변수로 지정된 순서에 해당하는 데이터필드의 이름을 가져온다. 필드명은 대문자로 변경되어 있다. 본래 필드명은 [DataProvider getOrgFieldName](/api/DataProvider/getOrgFieldName/)으로 가져온다.

#### Syntax

> function getFieldName(fieldIndex)

#### Parameters

> **fieldIndex**  
> Type: number  
> 필드 인덱스.  

#### Return value

> Type: string  
> 필드 이름.  

#### Example

<pre class="prettyprint">
    var field = 1;
    var fieldName = provider.getFieldName(field);
</pre>

