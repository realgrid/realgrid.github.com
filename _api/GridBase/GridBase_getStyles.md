---
layout: apipost
title: getStyles
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getStyles/
tags:
  - style
---


#### Description

> 지정한 영역의 스타일 정보를 가져온다.  

#### Syntax

> function getStyles(region, all)  

#### Parameters

> **region**  
> Type: string  
> 영역 이름  

> **all**  
> Type: boolean  
> true면 계승된 스타일 값까지 포함한다.  

#### Return value

> Type: object  
> 스타일 데이터.  

#### Examples 

<pre class="prettyprint">
var styles = grid.getStyles("header", true);
if (styles) {
    alert(JSON.stringify(styles));
}
</pre>

---

#### API Links

* [setStyles](/api/GridBase/setStyles)

#### Demo Links

* [Styles Overview](http://demo.realgrid.com/Demo/StylesConcept)