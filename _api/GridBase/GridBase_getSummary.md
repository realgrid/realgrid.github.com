---
layout: apipost
title: getSummary
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSummary/
tags:
  - summary
  - footer
---


#### Description

> Field의 합계값을 가져온다. [summaryMode](/api/types/SummaryMode/)에 따라서 가져올수 있는 값이 다르다.  
> dataType이 "number"인 field만 합계값을 가져올수 있다.

#### Syntax

> function getSummary(field,summary)  

#### Parameters

> **field**  
> Type: String\|integer  
> 필드명 또는 fieldIndex  

> **summary**  
> Type: String  
> Default: "sum"  
> sum, avg등을 입력한다.  
> summaryMode가 none인 경우 미리 계산을 해 놓지 않는다.  
> summaryMode가 aggregate인 경우 "sum","avg","min",'max","count"를 가져올수 있다.  
> statistical인 경우 "var","varp","stdev","stdevp"을 추가적으로 가져올수 있다.  

#### Return value

> Type: Number  
> 컬럼 이름 배열.  

#### Examples 

<pre class="prettyprint">
    var sum = grdMain.getSummary("field","sum");
</pre>
