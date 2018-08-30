---
layout: apipost
title: setEditValue
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setEditValue/
jsonly: true
versions:
    - JS 1.1.29+
tags:
  - 편집
  - 값설정
  - edit
  _ setValue

---

#### Description

 포커스가 위치한 셀에 값을 설정한다.      
 

#### Syntax

> function setEditValue(value, startEdit)

#### Parameters

> **value**  
> Type: String | Number     
> 설정하려는 값을 지정한다.    

> **startEdit**  
> Type: Boolean
> Default: false   
> true로 설정하면 해당 셀이 편집중이 아닌 경우 값을 설정하고 에디터를 표시한다.  
> false인 경우 값을 설정하지 않는다.  

#### Return value

> None. 

#### Examples 

<pre class="prettyprint">
gridView.setEditValue("abc", true);
</pre>

---
