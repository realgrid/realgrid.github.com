---
layout: apipost
title: showHiddenRows
part: Objects
objectname: DataProvider
directiontype: Function
jsonly: true
versions:
    - JS 1.1.27+
permalink: /api/DataProvider/showHiddenRows/
tags:
  - 숨긴행 표시
  - 표시
  - hide
  - hidden
  - show
---


#### Description

 gridView에서 hideRows()로 숨긴 행들을 화면에 다시 표시하고 싶을때 사용한다.    
 * 숨겨진 상태에서 remove, insert가 발생하는 경우 dataRow가 변경될 수 있므로 사용시 주의한다.  
 * filterMode, sortMode:"explicit"인 경우 showHiddenRows() 사용하면 필터나 소트가 다시 적용된다.  
 * 트리 그리드의 경우는 접힌(collapse) 상태로 표시된다.  

#### Syntax

> function showHiddenRows(dataRows)  

#### Parameters

> **dataRows**  
> Type: Array of Number  
> 숨긴 행들중 다시 표시하고 싶은 행번호들을 지정한다.   

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    dataProvider.hideRows([0,3,5]);

    dataProvider.showHiddenRows([3]);
</pre>

