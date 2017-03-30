---
layout: apipost
title: getColumnProperty
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnProperty/
tags:
  - property
  - columnProperty
---


#### Description

 [DataColumn](/api/types/DataColumn/) 또는 [ColumnGroup](/api/types/ColumnGroup/)의 속성을 가져온다.  

#### Syntax

> function getColumnProperty(column, prop)  

#### Parameters

> **column**  
> Type: String\|Object  
> 칼럼의 name 또는 Column객체이다.  

> **prop**  
> Type: String  
> 속성이름  

> **extend**  
> Type: Boolean   
> 확장정보 포함 여부, 현재 styles에만 적용되며 false 지정시 개발자가 지정한 속성만 표시된다.   
> RealGridJS 1.1.23 부터 지원     

#### Return value

> Type: Object  
> prop에 입력된 속성명의 값이다.  

#### Examples 

<pre class="prettyprint">
aHeader = gridView.getColumnProperty("column","header");
aHeader.text = "new Text";
gridView.setColumnProperty("column","header",aHeader);
</pre>

---

#### API Links

* [setColumnProperty](/api/GridBase/setColumnProperty)