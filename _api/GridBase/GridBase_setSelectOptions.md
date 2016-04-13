---
layout: apipost
title: setSelectOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setSelectOptions/
tags:
  - select
  - 범위선택
---


#### Description

> 그리드 선택 방식 및 선택 표시와 관련된 정보들을 설정한다. [SelectOptions](/api/types/SelectOptions/)이 설정 모델이다.

#### Syntax

> function setSelectOptions(options)

#### Parameters

> **options**  
> Type: object  
> [SelectOptions](/api/types/SelectOptions/)과 같은 내용의 설정 정보. [SelectOptions](/api/types/SelectOptions/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setSelectOptions({
        style: "rows"
        ...
    });
</pre>

#### Demo Links
> [getSelectOptions](/api/GridBase/getSelectOptions)  
> [Selecting Demo](http://demo.realgrid.com/Demo/Selecting)