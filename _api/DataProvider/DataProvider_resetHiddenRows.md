---
layout: apipost
title: resetHiddenRows
part: Objects
objectname: DataProvider
directiontype: Function
jsonly: true
versions:
    - JS 1.1.27+
permalink: /api/DataProvider/resetHiddenRows/
tags:
  - 숨긴행 
  - 미표시
  - hide
  - hidden
---


#### Description

 hideRows()로 숨긴 모든 행을 다시 표시한다.      

#### Syntax

> function resetHiddenRows()  

#### Parameters

> None.
 
#### Return value

> None.
> 숨겨진 행번호들을 반환한다.     

#### Examples 

<pre class="prettyprint">
    dataProvider.hideRows([0,3,5]);

    dataProvider.resetHiddenRows();
</pre>

