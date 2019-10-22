---
layout: apipost
title: removeColumn
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/removeColumn/
jsonly: true
versions:
    - JS 1.1.22+
tags:
  - 컬럼추가
  - column
  - 컬럼설정
---

#### Description

 그리드에 설정되어 있는 컬럼들 외에 추가로 컬럼을 설정할때 사용한다.    
 

#### Syntax

> function removeColumn(column)

#### Parameters

> **column**  
> Type: Object   
> [ColumnGroup](/api/types/ColumnGroup/)이나 [DataColumn](/api/types/DataColumn/)과 같은 내용으로 구성되는 object다.  


#### Return value

> Type: Boolean
> 삭제 성공 여부. 

#### Examples 

<pre class="prettyprint">
gridView.removeColumn("EmployeeID"); //일반 컬럼 삭제
gridView.removeColumn("OrderDate", "GroupIds"); //GroupIds 그룹 컬럼안에 있는 OrderDate 컬럼 삭제 
</pre>

---
