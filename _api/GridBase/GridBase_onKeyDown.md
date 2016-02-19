---
layout: apipost
title: onKeyDown
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onKeyDown/
jsonly: true
---


#### Description

> 키보드로 키 입력시 KeyUp 될 때 발생하는 콜백함수이다.   
> 결과값으로 false를 반환하면 키 입력이 취소된다. 

#### Syntax

> function onKeyDown(grid, key, ctrl, shift, alt)  

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

> Type: boolean  
> 키 입력을 금지할때 false 를 리턴한다..

#### Example

<pre class="prettyprint">
    grdMain.onKeyDown = function (grid, key, ctrl, shift, alt) {
        console.log("onKeyDown: key = " + key);
        return true;
    };
</pre>



