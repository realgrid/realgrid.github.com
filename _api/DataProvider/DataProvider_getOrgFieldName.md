---
layout: apipost
title: getOrgFieldName
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getOrgFieldName/
tags:
  - 본 필드이름
  - 기존 필드명
---


#### Description

> 매개변수로 지정된 순서에 해당하는 데이터필드의 이름을 가져온다. 필드명은 대문자로 변경되어 있다. 이 함수는 지정 당시의 필드명을 리턴한다.

#### Syntax

> function getOrgFieldName(fieldIndex)

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
    var fieldName = provider.getOrgFieldName(field);
</pre>


