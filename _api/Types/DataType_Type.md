---
layout: apipost
title: DataType
part: Types
typename: Constants
order: DataType
objectname: 
directiontype: 
permalink: /api/types/DataType/
tags:
  - DataType
  - 데이터타입
  - 필드타
---

#### Description

> DataProvider를 구성하는 각 필드의 자료형을 지정하는 상수입니다.

#### Members

> **TEXT**  
> Value: "text"  
> 문자형  

> **BOOL**  
> Value: "bool"  
> 논리형(true or false)  

> **NUMBER**  
> Value: "number"  
> 숫자형  

> **DATETIME**  
> Value: "datetime"  
> 날짜형  

#### Examples   

<pre class="prettyprint">
    fields = [{
        "fieldName": "OrderID",
        "dataType": "text"
    }, {
        "fieldName": "OrderDate",
        "dataType": "datetime"
    }, {
        "fieldName": "UnitPrice",
        "dataType": "number"
    }];
 
    dataProvider.setFields(fields);
</pre>

#### Demo Links
#### See Also

#### See Also

> [DataField](/api/DataProvider/DataField)    
> [setFields](/api/DataProvider/setFields/)   