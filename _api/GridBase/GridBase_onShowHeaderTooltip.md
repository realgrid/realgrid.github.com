---
layout: apipost
title: onShowHeaderTooltip
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onShowHeaderTooltip/
jsonly: true
tags:
  - tooltip
  - 툴팁
  - 툴팁 콜백  
---

#### Description

 컬럼헤더셀의 툴팁이 표시될때 발생하는 콜백 함수이다. return 되는 값이 툴팁에 표시된다. 기본값으로 컬럼헤더 text가 툴팁에 표시된다.   

#### Syntax

> function onShowHeaderTooltip (grid, index, value)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: string  
> 툴팁이 표시될 컬럼.    

> **value**  
> Type: string  
> 툴팁에 표시될 값, 기본값으로 컬럼헤더 text가 전달 됩니다.     

#### Return

> Type: string  
> 툴팁에 표시할 값    

#### Examples 

<pre class="prettyprint">
gridView.onShowHeaderTooltip = function (grid, column, value) {
    console.log("onShowHeaderTooltip: value =" + value);
    return "표시되길 원하는 텍스트를 반환 합니다. =>" + value;
}
</pre>

---

#### Demo Links

* [Tooltip](http://demo.realgrid.com/Demo/ColumnTooltip)