---
layout: apipost
title: onKeyPress
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onKeyPress/
jsonly: true
---


#### Description

> 키보드로 키 입력시 발생하는 콜백함수이다.   

#### Syntax

> function onKeyPress(grid, key)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **key**  
> Type: number  
> 키 코드  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grdMain.onKeyPress = function (grid, key) {
        console.log("onKeyPress: key = " + key);
    };
</pre>



