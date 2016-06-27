---
layout: apipost
title: setValues
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setValues/
tags:
  - 편집
  - edit
  - values
  - 값설정
---


#### Description

 지정한 itemIndex의 여러 필드의 값을 수정한다.
 strict가 true 일때 필드의 값을 undefined로 지정한 경우 기존의 값을 유지한다.

#### Syntax

> function setValues(itemIndex, values, strict)

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템 인덱스  

> **values**  
> Type: Object  
> 수정할 필드와 필드 값들  

> **strict**  
> Type: boolean   
> Default: false  
> 수정할 필드의 값이 undefined 일때 기존 값의 유지 여부.  

#### Return value

> None

#### Examples 

<pre class="prettyprint">
var values = {company : undefined, first_name : "first", last_name : "abc"};
gridView.setValues(0, values, true);
</pre>

---

#### API Links

* [setValue](/api/GridBase/setValue)
* [getValues](/api/GridView/getValues)

