---
layout: apipost
title: getCheckBar
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCheckBar/
tags:
  - check
---


#### Description

> 그리드 CheckBar와 관련된 설정 정보들을 가져온다. [CheckBar](/api/types/CheckBar/)가 설정 모델이다.  

#### Syntax

> function getCheckBar()  

#### Parameters

> None  

#### Return value

> Type: object  
> [CheckBar](/api/types/CheckBar/) 설정 모델과 동일한 내용의 객체가 반환된다.  

#### Examples 

<pre class="prettyprint">
    var checkbar = gridView.getCheckBar();
    checkbar.width = 30;
    gridView.setCheckBar(checkBar);
</pre>

#### Demo Links
> [setCheckBar](/api/GridBase/setCheckBar)  
> [CheckBar Demo](http://demo.realgrid.com/Demo/CheckBar)