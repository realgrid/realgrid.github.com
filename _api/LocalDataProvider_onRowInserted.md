---
layout: apipost
title: onRowInserted
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowInserted/
---


#### Description

> LocalDataProvider에 데이터행이 추가된 후에 호출된다.

#### Syntax

> function onRowInserted(provider, row)

#### Arguments

> **provider**
> Type: [LocalDataProvider\|LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> **row**
> number
> 추가된 행의 인덱스.

#### Return

None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowInserted = function (provider, row) {
        var values = provider.getRow(row);

        $("#txtUserId2").val(values.UserId);
        $("#txtUserName2").val(values.UserName);
        $("#txtAge2").val(values.Age);
        $("#txtGender2").val(values.Gender);
        $("#txtPhone2").val(values.MobilePhone);
        $("#txtMail2").val(values.Email);
    };
</pre>

