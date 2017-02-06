---
layout: apipost
title: getSortedFields
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSortedFields/
tags:
  - sort
  - sortedField
  - 소트필드
---


#### Description

 현재 소트되어 있는 필드들의 소트 정보를 가져온다.

#### Syntax

> function getSortedFields()

#### Parameters

> None.    

#### Return value

> Type: Array of Object  
> 소트 필드 정보 배열  
> 배열의 각 항목은 "direction", "fieldName", "orgFieldName" 의 정보를 가지고 있다.    

#### Examples 

<pre class="prettyprint">
gridView.getSortedFields();
</pre>

---

#### API Links

* [orderBy](/api/GridBase/orderBy)

#### Demo Links

* [ColumnSorting](http://demo.realgrid.com/Columns/ColumnSorting/)