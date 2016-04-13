---
layout: apipost
title: onRowStatesChanged
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowStatesChanged/
tags:
  - 상태변경 이벤트
  - 여러 데이터행
  - rowState변경 이벤트
---


#### Description

> LocalDataProvider에서 여러건의 데이터행의 rowState가 변경되는 경우 호출된다.  
> [updateRows](/api/LocalDataProvider/updateRows/), [updateStrictRows](/api/LocalDataProvider/updateStrictRows/), [removeRows](/api/LocalDataProvider/removeRows/)등의 method에서 rowEvents를 false로 실행하는 경우 호출된다.


#### Syntax

> function onRowStatesChanged(provider, rows)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **rows**  
> Type: Array of Number  
> 변경된 행 Index의 배열  

#### Return

> None.

#### Examples 

<pre class="prettyprint">
    dataProvider.onRowStatesChanged = function (provider, rows) {
        if (rows.length > 0) {
            for (idx in rows) {
                console.log("row ==>", rows[idx], "rowState ==>", provider.getRowState(rows[idx]));
            }
        }
    };
</pre>

