---
layout: apipost
title: getColumnProperty
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnProperty/
---


#### Description

> [dataColumn\|dataColumn](/api/GridBase/) 또는 [columnGroup\|columnGroup](/api/GridBase/)의 속성을 가져온다.

#### Syntax

> function getColumnProperty(column, prop)

#### Parameters

> **column**
> Type: String\|Object
> 칼럼의 name 또는 Column객체이다.

> **prop**
> Type: String
> 속성이름

#### Return value

> Type: Object
> prop에 입력된 속성명의 값이다.

#### Example

<pre class="prettyprint">
    aHeader = grdMain.getColumnProperty("column","header");
    aHeader.text = "new Text";
    grdMain.setColumnProperty("column","header",aHeader);
</pre>
