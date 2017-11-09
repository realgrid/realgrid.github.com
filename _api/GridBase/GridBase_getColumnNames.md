---
layout: apipost
title: getColumnNames
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getColumnNames/
tags:
  - column
  - columnInfo
---


#### Description

 그리드에 설정되어 있는 컬럼 이름들을 가져온다.  

#### Syntax

> function getColumnNames(columnsOnly, visibleOnly)  

#### Parameters

> **columnsOnly**  
> Type: Boolean  
> Default: false  
> false면 컬럼 그룹들을 포함한 모든 컬럼들의 이름을 가져온다.   

> **visibleOnly**  
> Type: Boolean  
> Default: false  
> false면 숨긴 컬럼들을 포함한 모든 컬럼들의 이름을 가져온다.   
> JS 1.1.26부터 지원한다.  

#### Return value

> Type: array of string  
> 컬럼 이름 배열.  

#### Examples 

<pre class="prettyprint">
var columnNames = gridView.getColumnNames(false);
</pre>

---

#### API Links

* [getColumns](/api/GridBase/getColumns)
* [getColumnGroupNames](/api/GridBase/getColumnGroupNames)
