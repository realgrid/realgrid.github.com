---
layout: apipost
title: setColumnProperty
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnProperty/
tags:
  - columnProperty
  - 컬럼설정
  - 컬럼정보
  - 컬럼속성
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

##### Examples 

<pre class="prettyprint">
    var column = grid.columnByName("col1");
    gridView.setColumnProperty(column, "editable", false);
</pre>

#### See Also
> [columnByName](/api/GridBase/columnByName),[ColumnProperties](http://demo.realgrid.com/Demo/ColumnProperties)