---
layout: apipost
title: onColumnPropertyChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onColumnPropertyChanged/
jsonly: true
versions:
  - JS 1.1.22+
tags:
  - event
  - validate
  - 검증
  - 검사
---

#### Description

 컬럼의 속성 중 width, displayIndex, visible 속성 값이 변경되면 발생한다.   

#### Syntax

> function onColumnPropertyChanged (grid, column, property, value)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: [DataColumn](/api/types/DataColumn/)  
> 변경된 컬럼의 정보  

> **property**  
> Type: String  
> 컬럼의 width, displayIndex, visible 속성 중 변경된 것이 전달된다.    

> **value**  
> Type:   
> 변경된 값이 전달된다.   

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.onColumnPropertyChanged = function (grid, column, property, value) {
    console.log("onColumnPropertyChanged : column =" + column);
}
</pre>

---
