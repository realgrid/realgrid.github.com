---
layout: apipost
title: onSortingChanged
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
permalink: /api/GridBase/onSortingChanged/
tags:
  - event
  - sort
  - 정렬
---


#### Description

 소팅가 완료된 후 호출된다.  

#### Syntax

> function onSortingChanged(grid) 

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return  

> None.   

#### Examples 

<pre class="prettyprint">
gridView.onSortingChanged = function (grid) {
    console.log("onSortingChanged");
}
</pre>

---

#### API Links

* [Sorting](/api/features/Sorting)