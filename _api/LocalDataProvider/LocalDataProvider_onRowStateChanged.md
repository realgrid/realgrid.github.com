---
layout: apipost
title: onRowStateChanged
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowStateChanged/
tags:
  - rowState변경 이벤트
  - 상태변경 이벤트
  - 상태표시 아이콘
---


#### Description

> LocalDataProvider의 데이터행의 rowState가 변경되는 경우 호출된다.  
> 데이터행이 insert되는 경우에는 발생되지 않는다.

#### Syntax

 function onRowStateChagned(provider, row)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.

> **row**  
> Type: Number  
> rowState가 변경된 데이터행의 Index.

#### Return

> None.

#### Examples 

<pre class="prettyprint">
dataProvider.onRowStateChanged = function (provider, row) {
    console.log(provider.getRowState(row));
};
</pre>

