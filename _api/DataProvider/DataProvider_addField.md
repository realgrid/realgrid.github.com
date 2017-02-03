---
layout: apipost
title: addField
part: Objects
objectname: DataProvider
directiontype: Function
jsonly: true
versions:
    - JS 1.1.22+
permalink: /api/DataProvider/addField/
tags:
  - 새로운 필드
  - 필드 추가
---


#### Description

 기존 필드에 새로운 필드를 추가할때 사용한다.    

#### Syntax

> function addField(field, resetData)  

#### Parameters

> **field**  
> Type: Object  
> [DataField](/api/types/DataField/)와 같은 내용으로 구성되는 object다.  

> **resetData**  
> Type: Boolean  
> Default: true   
> 필드가 추가될때 기존 필드에 담겨져 있는 데이터들의 초기화 여부를 지정한다.   

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    var field = {fieldName: "field", dataType: "datetime"};
    dataProvider.addField(field, false);
</pre>

