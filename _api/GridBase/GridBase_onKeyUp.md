---
layout: apipost
title: onKeyUp
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onKeyUp/
jsonly: true
tags:
  - event
  - keyUp
  - 키입력
  - 키보드
---


#### Description

> 키보드로 키 입력시 KeyUp 될 때 발생하는 콜백함수이다.   

#### Syntax

> function onKeyUp(grid, key, ctrl, shift, alt)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **key**  
> Type: number  
> 키 코드  

> **ctrl**  
> Type: boolean  
> 키 입력 여부  

> **shift**  
> Type: boolean  
> 키 입력 여부  

> **alt**  
> Type: boolean  
> 키 입력 여부  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.onKeyUp = function (grid, key, ctrl, shift, alt) {
        console.log("onKeyUp: key = " + key);
    };
</pre>

#### Demo Links
#### See Also

#### See Also
> [onKeyDown](/api/GridBase/onKeyDown), [onKeyPress](/api/GridBase/onKeyPress)