---
layout: apipost
title: fieldByName
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/fieldByName/
jsonly: true
tags:
  - 필드정보 가져오기
  - 필드정보 반환
---


#### Description

 필드명으로 필드 정보를 가져온다.

#### Syntax

> function fieldByName(name)

#### Parameters

> **name**  
> Type: String  
> 필드명  

#### Return value

> Type: [DataField](/api/types/DataField)   
> 필드정보가 반환된다.

#### Examples 

<pre class="prettyprint">
    var field = provider.fieldByName("company");
</pre>

