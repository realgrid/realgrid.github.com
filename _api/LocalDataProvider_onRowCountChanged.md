---
layout: apipost
title: onRowCountChanged
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowCountChanged/
---


#### Description

> 행 추가 및 삭제 등으로 행의 개수가 변경됐을 때 호출된다.

#### Syntax

> function onRowCountChanged (provider, count)

#### Arguments

> *provider*
> Type: [LocalDataProvider|LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> *count*
> Type: Number
> 변경된 행의 개수.

#### Return

> None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowCountChanged = function (provider, count) {
        console.log("DataProvider changed.");
    };
</pre>

