---
layout: apipost
title: onRowMoving
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowMoving/
tags:
  - 데이터행 이동 직전
  - 데이터행 이동 이벤트
  - newRow
---


#### Description

> LocalDataProvider에 데이터행이 이동되기 직전에 호출된다.

#### Syntax

> function onRowMoving(provider, row, newRow)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **row**  
> Type: Number  
> 이동하려는 데이터행의 Index.  

> **newRow**  
> Type: Number  
> 이동될 데이터행의 Index.  

#### Return

> Type: Boolean  
> false를 리턴하면 이동이 취소된다.

#### Examples 

<pre class="prettyprint">
    dataProvider.onRowMoving = function (provider, row, newRow) {
        if (provider.getValue(row,"field") == "move") {
        } else {
            return false;
        }
    };
</pre>

