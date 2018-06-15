---
layout: apipost
title: drawView
part: Objects
objectname: drawView
directiontype: Function
permalink: /pivotApi/RealPivot/drawView/
tags:
  - 화면표시
  - 표시
---


#### Description

 피벗 그리드를 화면에 표시한다.
 최초에 한번 drawView()를 호출하면 이 후 DataProvider가 변경될 때는 자동으로 갱신된다.   
 (fillJsonData(), fillCsvData(), fillXmlData()와 같이 일괄적으로 변경되는 경우에만 반영)         

#### Syntax

> function drawView()

#### Parameters

> None.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.drawView();
</pre>

