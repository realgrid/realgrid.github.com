---
layout: apipost
title: hideRows
part: Objects
objectname: DataProvider
directiontype: Function
jsonly: true
versions:
    - JS 1.1.27+
permalink: /api/DataProvider/hideRows/
tags:
  - 행숨김
  - 미표시
  - hide
  - hidden
---


#### Description

 gridView에서 특정 행들을 화면에서 표시하고 싶지 않을때 사용한다.   
 * 숨겨진 상태에서 remove, insert가 발생하는 경우 dataRow가 변경될 수 있므로 사용시 주의한다.  
 
#### Syntax

> function hideRows(dataRows)  

#### Parameters

> **dataRows**  
> Type: Array of Number  
> gridView에서 숨기고 싶은 행번호들을 지정한다.   
 

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    dataProvider.hideRows([0,3,5]);
</pre>

