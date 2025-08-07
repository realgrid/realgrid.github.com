---
layout: apipost
title: onGridFocusChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onGridFocusChanged/
jsonly: true
tags:
  - event
  - focus
---


#### Description

 그리드가 focus를 가지거나 잃어버렸을때 호출된다.  

#### Syntax

> function onGridFocusChanged (grid, focused, event)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **focused**  
> Type: boolean  
> focus를 가지는 경우 `true` 잃는 경우 `false`로 전달된다.   

> **event**  
> Type: Event  
> 이벤트를 발생시킨 browser의 이벤트.   

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
grid.onGridFocusChanged =  function (grid, focused, event) {
    console.log(focused, event);  
};
</pre>

