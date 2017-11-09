---
layout: apipost
title: getCheckedRows
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/getCheckedRows/
tags: 
  - 체크된 데이터 행 인덱스 배열
---


#### Description

 Check된 데이터 행들의 목록을 반환한다.

#### Syntax

> function getCheckedRows(sort, visibleOnly, allRows)

#### Parameters

> **sort**  
> Type: Boolean  
> Default: true  
> false로 입력하면 화면에 보이는 순서대로 결과값이 반환된다. true로 입력하면 결과값을 올림차순으로 정렬해서 반환된다.  

> **visibleOnly**  
> Type: Boolean  
> Default: false  
> true로 입력하면 collapse되거나 페이징시 보이지 않는 행들은 제외한다.   

> **allRows**  
> Type: Boolean  
> Default: false  
> true로 입력하면 페이징 처리시 보이지 않는 페이지들의 체크된 행들도 가져온다.    
> visibleOnly가 false 여야 한다.  
> JS ver 1.1.26부터 지원된다.	

#### Return value

> Type: Array of Number  
> Check된 행 인덱스들의 배열.

#### Examples 

<pre class="prettyprint">
var rows = gridView.getCheckedRows(true);
</pre>

---

#### Demo Links

* [CheckBar](http://demo.realgrid.com/GridComponent/CheckBar/){:target="_blank"} 