---
layout: apipost
title: onRowsUpdated
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowsUpdated/
---


#### Description

> LocalDataProvider에 데이터행들이 수정된 후에 호출된다.
> [LocalDataProvider updateRows\|updateRows](/api/LocalDataProvider/) 또는 [LocalDataProvider updateStrictRows\|updateStrictRows](/api/LocalDataProvider/)에서 rowEvents를 false로 입력하고 실행하는 경우에만 호출된다.

#### Syntax

> function onRowsUpdated(provider, row, count)

#### Arguments

> **provider**
> Type: [LocalDataProvider\|LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> **row**
> Type:number
> 수정이 시작된 행의 인덱스.

> **count**
> Type:Number
> 수정된 행의 건수

#### Return

None.

#### Example

<pre class="prettyprint">
    rows = [{"no":"1","title":"title1","content":"content1"},{"no":"2","title":"title2"}];
    dataProvider.updateRows(0,rows,0,-1,false);

    ....

    dataProvider.onRowsUpdated = function (provider, row,count) {
        console.log("row ==>",row, "count==>",count);
    };
</pre>

