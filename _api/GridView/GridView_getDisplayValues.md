---
layout: apipost
title: getDisplayValues
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/getDisplayValues/
jsonly: true
versions:
    - JS 1.1.22+
tags: 
  - JSON
  - 가져오기
  - 행의 값
---

#### Description

 지정한 itemIndex의 값들을 JSON객체로 가져온다. 가져오는 값들의 형태는 GridView에 각종 포맷이나 정규식이 적용된 형태로 가져온다.  

#### Syntax

> function getDisplayValues(itemIndex, applyStyle)  

#### Parameters

> **itemIndex**  
> Type: integer  
> itemIndex를 입력한다.  

> **applyStyle**  
> Type: booelan  
> 스타일에 정의되어 있는 포맷의 적용여부를 지정한다.   

#### Return value

> Type: Object  
> JSON객체로 만들어진 item행의 값  

#### Examples 

<pre class="prettyprint">
var values = gridView.getDisplayValues(0);
</pre>

---

