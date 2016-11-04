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
tags:
  - datetimeFormat
  - booleanFormat
  - 데이트타임
  - 불린
  - 아웃풋옵션
  - DataOuptputOptions
---

#### Description

 datetime, boolean 필드에 대해 변환 형식을 지정한다.

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

> **nullText**  
> Type: String  
> Default: ""  
> text 필드의 값이 null 일때 표현되는 값을 지정한다. 
> ver 1.1.20부터 지원된다.

> **nanText**  
> Type: String  
> Default: ""  
> number 필드의 값이 null 일때 표현되는 값을 지정한다. 
> ver 1.1.20부터 지원된다.

> **numberFormat**  
> Type: String  
> Default: ""  
> number 필드의 값에 형식을 지정할때 사용한다. 
> ex) "#,##0.###" 
> ver 1.1.20부터 지원된다.

> **numberCallback**  
> Type: function (index, column, value)  
> Default: undefined  
> number 필드 변환시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다. 
> ver 1.1.20부터 지원된다.

#### Examples   

<pre class="prettyprint">
var options = {
	datetimeFormat: "yyyy-MM-dd",
	booleanFormat: "거짓;참",
	numberCallback: function (index, column, value) {
	    return value / 2;
	}
};

dataProvider.getOutputRows(options, 0, 10);	
</pre>

---

#### API Links

* [getOutputRow](/api/LocalDataProvider/getOutputRow/)     
* [getOutputRows](/api/LocalDataProvider/getOutputRows/)     

