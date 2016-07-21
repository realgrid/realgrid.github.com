---
layout: apipost
title: getUpdatedCells
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getUpdatedCells/
jsonly: true
versions:
  - JS 1.1.17+
tags: 
  - 수정된 데이터 확인
---


#### Description

 지정된 행의 수정된 셀 데이터들을 확인한다.   
 dataProvider.options.[restoreMode](/api/types/RestoreMode/)  가 "explicit" 나 "auto" 로 지정되어 있어야한다.  

#### Syntax

> function getUpdatedCells(rows)

#### Parameters

> **rows**  
> Type: Array of Number  
> 확인하려는 dataRow 배열이다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    var rows = grid.getCheckedRows();
    var cells = provider.getUpdatedCells(rows);
</pre>

---

#### Tutorial Links

* [복원 모드(RestoreMode)](http://help.realgrid.com/tutorial/c6/){:target="_blank"} 참조 