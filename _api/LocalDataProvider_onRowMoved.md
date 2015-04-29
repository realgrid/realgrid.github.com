---
layout: apipost
title: onRowMoved
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowMoved/
---


#### Description

> LocalDataProvider에서 데이터행이 이동된후에 호출된다.

#### Syntax

> function onRowMoved(provider, row, newRow)

#### Arguments

> *provider*
> Type: [LocalDataProvider|LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> *row*
> Number
> 이동되기전의 데이터행 Index

> *newRow*
> Number
> 이동된 후의 데이터행 Index

#### Return

None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowMoved = function (provider, row, newRow) {
        var values = provider.getRow(newRow);

        $("#txtUserId2").val(values.UserId);
        $("#txtUserName2").val(values.UserName);
        $("#txtAge2").val(values.Age);
        $("#txtGender2").val(values.Gender);
        $("#txtPhone2").val(values.MobilePhone);
        $("#txtMail2").val(values.Email);
    };
</pre>

