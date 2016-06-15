---
layout: apipost
title: clearStyles
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/clearStyles/
tags:
  - style
  - clearStyle
---


#### Description

 지정한 영역의 스타일 값들을 모두 제거해서 기본값을 따르게 한다.  

#### Syntax

> function clearStyles(region)  

#### Parameters

> **region**  
> Type: string  
> 영역 이름을 지정한다.  
> "all"을 지정시 모든 영역의 스타일이 제거 된다.      


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.clearStyles("header");
</pre>

---

#### API Links

* [setStyles](/api/GridBase/setStyles) 

#### Demo Links

* [Styles Overview](http://demo.realgrid.com/Demo/StylesConcept)