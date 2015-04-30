---
layout: apipost
title: onRowsMoved
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowsMoved/
---


#### Description

> LocalDataProvider에서 데이터행들이 이동된후에 호출된다.

#### Syntax

> function onRowMoved(provider, row, newRow)

#### Arguments

> *provider*
> Type: [LocalDataProvider|LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> *row*
> type: Number
> 이동되기전의 데이터 시작행 Index

> *count*
> type: Number
> 이동된 행의 개수.

> *newRow*
> type: Number
> 이동된 후의 데이터 시작행 Index

#### Return

None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowsMoved = function (provider, row, count, newRow) {
        var values = provider.getRow(newRow);

        $("#txtUserId2").val(values.UserId);
        $("#txtUserName2").val(values.UserName);
        $("#txtAge2").val(values.Age);
        $("#txtGender2").val(values.Gender);
        $("#txtPhone2").val(values.MobilePhone);
        $("#txtMail2").val(values.Email);
    };
</pre>
