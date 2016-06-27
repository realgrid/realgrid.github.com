---
layout: apipost
title: DataOuptputOptions
part: Types
typename: Classes
order: DataOuptputOptions
objectname: 
directiontype: 
permalink: /api/types/DataOuptputOptions/
jsonly: true
---

#### Description

> datetime, boolean 필드에 대해 변환 형식을 지정한다.

#### Properties

> **datetimeFormat**  
> Type: String  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 복사할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  

> **booleanFormat**  
> Type: String  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 복사할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  

> **datetimeCallback**   
> Type: function (index, column, value)   
> Default: undefined   
> datetime 필드 변환시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다.   

> **booleanCallback**   
> Type: function (index, column, value)   
> Default: undefined   
> boolean 필드 변환시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다.   

> **nullDateText**  
> Type: String  
> Default: ""  
> DateTime 필드의 값이 null 일때 표현되는 값을 지정한다. 


#### See Also

> 
