---
layout: apipost
title: getCheckedItems
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/getCheckedItems/
tags: 
  - 체크
  - 아이템
  - 체크된 아이템
---


#### Description

 Check된 아이템들의 목록을 배열로 반환한다.

#### Syntax

> function getCheckedItems(all)

#### Parameters

> **all**  
> Type: Boolean  
> Default: false  
> true로 입력하면 그룹헤더나 그룹푸터 등 비데이터영역에 체크된 것들까지 가져온다.  

#### Return value

> Type: Array of Number  
> 아이템 인덱스들의 배열.

#### Examples 

<pre class="prettyprint">
var items = gridView.getCheckedItems();
</pre>

---

#### Demo Links

* [CheckBar](http://demo.realgrid.com/Demo/CheckBar){:target="_blank"} 