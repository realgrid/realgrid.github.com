---
layout: apipost
title: onRowStatesCleared
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowStatesCleared/
tags:
  - rowState
  - deleted
  - createAndDeleted
  - 데이터 삭제
  - rowState 초기화
---


#### Description

 [DataProvider.clearRowStates](/api/DataProvider/clearRowStates/)를 호출하여 rowState가 deleted이거나 createAndDeleted인 데이터를 삭제하고 rowState를 초기화 한 후 호출된다.

#### Syntax

> function onRowStatesCleared(provider)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.

#### Return

> None.

#### Examples 

<pre class="prettyprint">
dataProvider.onRowStatesCleared = function (provider) {
    console.log("RowStatesCleared");
};
</pre>

