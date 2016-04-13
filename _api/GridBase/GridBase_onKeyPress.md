---
layout: apipost
title: onKeyPress
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onKeyPress/
jsonly: true
tags:
  - keyDown
  - 키보드
  - event
  - 키입력
---


#### Description

> 키보드로 키 입력시 발생하는 콜백함수이다.   
> Control Key, Shift Key, Alt Key의 경우 이벤트가 발생되지 않는다.
> 키를 입력하고 있는 동안 계속 발생된다.  

#### Syntax

> function onKeyPress(grid, key)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **key**  
> Type: number  
> 키 코드 대소문자를 구분한다. 

#### Return

> None.  

##### Examples 

<pre class="prettyprint">
    grdMain.onKeyPress = function (grid, key) {
        console.log("onKeyPress: key = " + key);
    };
</pre>



