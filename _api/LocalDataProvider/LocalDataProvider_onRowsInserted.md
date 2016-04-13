---
layout: apipost
title: onRowsInserted
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowsInserted/
tags:
  - 여러행 추가
  - 행 추가 이벤트
  - 여러행이 추가된 경우
---


#### Description

> LocalDataProvider에 여러행이 추가된 경우 호출된다.

#### Syntax

> function onRowsInserted = function (provider, row, count) 

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.

> **row**  
> Type: number  
> 추가된 행의 인덱스.

> **count**  
> Type: number  
> 추가된 행의 개수.

#### Return

> None.

#### Examples 

<pre class="prettyprint">
    dataProvider.onRowsInserted = function (provider, row, count) { 
        alert("OK -> row = " + row + ", count = " + count); 
    } 


    var datas = [ 
        {userid:"2", company:"3", first_name: "4", last_name: "5", gender: "6", id:"**1"}, 
        {userid:"2", company:"3", first_name: "4", last_name: "5", gender: "6", id:"**2"}, 
        {userid:"2", company:"3", first_name: "4", last_name: "5", gender: "6", id:"**3"} 
    ] 
    dataProvider.insertRows(7, datas, 0, 2); 
</pre>

