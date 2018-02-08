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

 그리드에 설정되어 있는 컬럼의 특정 속성 정보를 변경한다.  
 * editor 속성 안에 있는 속성을 변경하려는 경우 editor 전체를 다시 지정해야 한다.  
 * values, labels를 변경하는 경우 setColumnProperty()로 변경할 수 없으며 setColumn()으로 컬럼 자체를 재지정해야 한다.  

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

#### Examples 

<pre class="prettyprint">
var column = grid.columnByName("col1");
gridView.setColumnProperty(column, "editable", false);
</pre>

---

#### API Links

* [columnByName](/api/GridBase/columnByName)

#### Demo Links

* [ColumnProperties](http://demo.realgrid.com/Columns/ColumnProperties/)