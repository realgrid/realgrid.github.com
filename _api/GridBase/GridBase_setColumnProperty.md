---
layout: apipost
title: setColumnProperty
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnProperty/
---


#### Description

> 그리드에 설정되어 있는 컬럼의 특정 속성 정보를 변경한다.

#### Syntax

> function setColumnProperty(column, prop, value)

#### Parameters

> **column**  
> Type: Object  
> 컬럼 속성   

> **prop**  
> Type: string  
> 변경하고자 하는 속성명  

> **value**  
> Type: *  
> 변경 값  

#### Return value

> None

#### Example

<pre class="prettyprint">
    var column = grid.columnByName("col1");
    grid.setColumnProperty(column, "editable", false);
</pre>




