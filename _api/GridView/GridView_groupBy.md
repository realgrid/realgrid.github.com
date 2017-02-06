---
layout: apipost
title: groupBy
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/groupBy/
tags: 
  - 순서대로
  - 그룹핑
  - grouping
---


#### Description

 지정한 필드 목록에 포함된 순서대로 행 그룹핑을 실행한다.


#### Syntax

> function groupBy(fieldNames)

#### Parameters

> **fieldNames**  
> Type: Array of String  
> 데이터필드 이름 목록  
> 그룹을 해제하려는 경우 빈 배열을 입력한다.

#### Return value

> None

#### Examples 

<pre class="prettyprint">
gridView.groupBy(["field1", "field2"]);  // 그룹을 설정하는 경우
gridView.groupBy([]);  // 그룹을 해제하려는 경우
</pre>

---

#### Demo Links

* [RowGrouping](http://demo.realgrid.com/RowGroup/RowGrouping/){:target="_blank"} 