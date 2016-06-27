---
layout: apipost
title: setFields
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/setFields/
tags:
  - 새로운 필드
  - 필드 생성
---


#### Description

> 기존 필드 정보와 데이터 행들을 모두 삭제하고 매개변수로 전달되는 필드 정보 배열로 부터 새로운 필드셋을 구성한다.  

#### Syntax

> function setFields(fields)  

#### Parameters

> **options**  
> Type: Array of object  
> 배열의 각 항목은 [DataField](/api/types/DataField/)와 같은 내용으로 구성되는 object다.  

#### Return value

> None.  

#### Example

<pre class="prettyprint">
    provider.setFields([{
        fieldsName: "field1"
    }, {
        fieldName: "field2",
        dataType: "datetime"
        ...
    }]);
</pre>

