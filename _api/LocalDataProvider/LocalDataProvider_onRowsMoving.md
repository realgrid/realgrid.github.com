---
layout: apipost
title: onRowsMoving
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowsMoving/
tags:
  - 데이터행 이동 이벤트
  - 데이터행들의 이동 직전
  - newRow
---


#### Description

 LocalDataProvider에 데이터행들이 이동되기 직전에 호출된다.

#### Syntax

> function onRowsMoving(provider, row, count, newRow)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **row**  
> Type: Number  
> 이동하려는 데이터행의 Index.  

> **count**  
> Type: Number  
> 이동되는 행의 개수.  

> **newRow**  
> Type: Number  
> 이동될 데이터행의 Index.

#### Return

> Type: Boolean  
> false를 리턴하면 이동이 취소된다.  

#### Examples 

<pre class="prettyprint">
dataProvider.onRowsMoving = function (provider, row, count, newRow) {
    if (provider.getValue(row,"field") == "move") {
    } else {
        return false;
    }
};
</pre>

