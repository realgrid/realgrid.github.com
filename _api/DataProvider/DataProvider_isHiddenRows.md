---
layout: apipost
title: isHiddenRows
part: Objects
objectname: DataProvider
directiontype: Function
jsonly: true
versions:
    - JS 1.1.27+
permalink: /api/DataProvider/isHiddenRows/
tags:
  - 숨긴행 확인
  - 표시
  - hide
  - hidden
  - show
---


#### Description

 hideRows()로 숨긴 행인지 확인하고 싶을때 사용한다.      
 * 숨겨진 상태에서 remove, insert가 발생하는 경우 dataRow가 변경될 수 있므로 사용시 주의한다.  
 
#### Syntax

> function isHiddenRows(dataRow)  

#### Parameters

> **dataRow**  
> Type: Number  
> 숨긴 행인지 확인하고 싶은 행번호를 지정한다.     
 

#### Return value

> Type: Boolean
> hideRows()로 숨긴 행인 경우 true를 반환한다.    

#### Examples 

<pre class="prettyprint">
    dataProvider.hideRows([0,3,5]);

    dataProvider.showHiddenRows([3]);

    alert(dataProvider.isHiddenRow(3)); //true
</pre>

