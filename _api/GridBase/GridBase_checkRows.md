---
layout: apipost
title: checkRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkRows/
tags:
  - check
  - checkRows
---


#### Description

 입력된 dataRow와 연결된 Item을 체크하거나 해제한다.  

#### Syntax

> function checkRows(dataRows, checked, checkEvent)  

#### Parameters

> **dataRows**  
> Type: Array of Integer  
> dataRow 배열  

> **checked**  
> Type: Boolean  
> true를 입력하면 dataRows와 연결된 Item을 체크한다.  

> **checkEvent**  
> Type: Boolean  
> Default: true  
> onItemChecked()의 발생 여부를 지정한다.  
> ver 1.1.20부터 지원된다.   

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
gridView.checkRows([1,2,3,4],true);
</pre>

---

#### API Links

* [checkRow](/api/GridBase/checkRow)
* [checkItem](/api/GridBase/checkItem)
* [checkItems](/api/GridBase/checkItems)

### Demo Links

* [CheckBar Demo](http://demo.realgrid.com/GridComponent/CheckBar/)