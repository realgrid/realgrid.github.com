---
layout: apipost
title: DataField
part: Types
objectname: 
directiontype: 
permalink: /api/types/DataField/
---


#### Properties

> *fieldName*    
> Type: string       
> 필드명

> *dataType*     
> Type: [DataType](/api/types/) 
> Default: DataType.TEXT 
> 자료형      

> *length*       
> Type: Number       
> Default: 10   
> 데이터 길이

> *subtype*
> Type: [SubDataType](/api/types/)
> 기본 자료형을 제한된 범위로 사용하기 위한 지시자

> *baseField*
> Type: string       
> 기준 필드

> *defaultValue* 
> Type: Object       
> 기본 값

> *min* 
> Type: number | datetime       
> 최소 범위의 한계값

> *max* 
> Type: number | datetime
> 최대 범위의 한계값

> *set* 
> Type: Array
> 배열에 포함된 값이 아니면 undefined로 저장되게 한다. Boolean 자료형을 제외한 나머지 자료형에서 사용가능하다.
