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

> 그리드에 설정되어 있는 컬럼 이름들을 가져온다.  

#### Syntax

> function getColumnNames(columnsOnly)  

#### Parameters

> **columnsOnly**  
> Type: Boolean  
> Default: false  
> true면 컬럼 그룹들을 포함한 모든 컬럼들의 이름을 가져온다.   

#### Return value

> Type: array of string  
> 컬럼 이름 배열.  

##### Examples 

<pre class="prettyprint">
var columnNames = gridView.getColumnNames(false);
</pre>

#### See Also
> [getColumns](/api/GridBase/getColumns), [getColumnGroupNames](/api/GridBase/getColumnGroupNames)
