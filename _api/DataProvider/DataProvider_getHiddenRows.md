---
layout: apipost
title: getHiddenRows
part: Objects
objectname: DataProvider
directiontype: Function
jsonly: true
versions:
    - JS 1.1.27+
permalink: /api/DataProvider/getHiddenRows/
tags:
  - 숨긴행 
  - 미표시
  - hide
  - hidden
---


#### Description

 hideRows()로 숨긴 행을 알고 싶을때 사용한다.      
 * 숨겨진 상태에서 remove, insert가 발생하는 경우 dataRow가 변경될 수 있므로 사용시 주의한다.  

#### Syntax

> function getHiddenRows()  

#### Parameters

> None.
 
#### Return value

> Type: Array of Number  
> 숨겨진 행번호들을 반환한다.     

#### Examples 

<pre class="prettyprint">
    dataProvider.hideRows([0,3,5]);

    alert(dataProvider.getHiddenRows()) // 0,3,5;
</pre>

