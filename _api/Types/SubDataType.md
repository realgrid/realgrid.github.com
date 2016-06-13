---
layout: apipost
title: SubDataType
part: Types
typename: Constants
order: SubDataType
objectname: 
directiontype: 
permalink: /api/types/SubDataType/
tags:
    - 서브데이터타입
---


#### Description

> DataProvider [DataField](/api/types/DataField)의 네 가지 자료형을 제한된 범위로 사용할때 사용한다.

#### Members

> **CHAR**  
> Value: "char"  
> 0 보다 큰 "length" 속성과 더불어 길이가 제한된 문자열로 저장된다. "length"를 0 이하로 지정하면 "text" 기본 자료형과 동일하다.  

> **UNUM**  
> Value: "unum"  
> 0 이상의 숫자로 저장된다.  

> **INT**  
> Value: "int"  
> 정수형 값으로 저장된다. i = v >= 0 ? Math.floor(v) : Math.ceil(v); 와 같은 방식으로 저장된다. 즉, 1.1 이면 1 로, -1.1 이면 -1 로 저장된다.  

> **UINT**  
> Value: "uint"  
> 0 이상의 정수형 값으로 저장된다. i = Math.floor(v); 와 같은 방식으로 저장된다.

> **DATE**  
> Value: "date"  
> 시간 부분이 제거된 날짜값으로 저장된다.
