---
layout: apipost
title: onRowInserting
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowInserting/
tags:
  - editing
  - rowInserting
  - 편집
  - 추가
---


#### Description

> 사용자가 Insert 키를 눌러 새로운 행을 삽입하거나, 마지막 행에서 아래 화살표를 눌러 행을 추가하려고 할 때 호출된다. 이 콜백에서 행 추가 불가 메시지를 리턴하면 행 추가가 금지된다.  

#### Syntax

> function onRowInserting (grid, itemIndex)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: number  
> 행 삽입 위치의 itemIndex이다. 

#### Return

> Type: string  
> 행 추가를 금지 시킬 때 사용자에게 표시할 메시지를 리턴한다.   

#### Examples 

<pre class="prettyprint">
    gridView.onRowInserting = function (grid, itemIndex) {
        return "행을 추가할 수 없습니다.";
    };
</pre>

#### Demo Links
> [Inserting Demo](http://demo.realgrid.com/Demo/Inserting)