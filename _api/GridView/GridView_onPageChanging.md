---
layout: apipost
title: onPageChanging
part: Objects
objectname: GridView
directiontype: Callback
permalink: /api/GridView/onPageChanging/
tags: 
  - 페이지 이동하기 전 이벤트
  - 페이지 변경전 이벤트
---


#### Description

> 그리드가 [Paging](/api/features/Paging/) 상태일 때, 다른 페이지로 이동하기 직전에 호출된다.

#### Syntax

> function onPageChanging (grid, newPage)

#### Arguments

> **grid**  
> Type: [GridView](/api/GridView/)  
> GridView 컨트롤

> **newPage**  
> Type: number  
> 새로 이동하게 될 페이지 인덱스.

#### Return

> Type: boolean  
> false를 리턴하면 페이지 이동이 취소된다.

#### Examples 

<pre class="prettyprint">
    gridView.onPageChanging =  function (grid, newPage) {
        return false;
    }
</pre>

