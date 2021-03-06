---
layout: apipost
title: beginInsertRow
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/beginInsertRow/
tags: 
  - 새로운 행 추가
---


#### Description

 그리드에 itemIndex로 입력된 데이터행 앞에 새로운 데이터행을 생성한다.  
 그리드가 편집상태이거나 데이터건수가 없는 경우 추가되지 않는다.

#### Syntax

> function beginInsertRow(itemIndex, shift)

#### Parameters

> **itemIndex**  
> Type: Number  
> Default: -1  
> itemIndex를 입력하지 않으면 이전에 실행된 beginInsertRow의 itemIndex 앞에 추가되거나 실행된적이 없으면 0번째 itemIndex앞에 추가된다.  
> 0이상의 값을 입력하면 데이터행 앞에 새로운 데이터행을 생성한다.

> **shift**  
> Type: Boolean  
> Default: false   
> true를 지정하면 데이터행 뒤에 새로운 데이터행을 생성한다.  
> JS Ver 1.1.19 이상 지원한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.beginInsertRow(0);
</pre>

---

#### Demo Links

* [Inserting](http://demo.realgrid.com/Editing/Inserting/){:target="_blank"} 
