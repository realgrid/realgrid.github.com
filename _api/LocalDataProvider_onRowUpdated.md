---
layout: apipost
title: onRowUpdated
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowUpdated/
---


#### Description

> [LocalDataProvider](/api/LocalDataProvider/)에 데이터행이 수정된 후에 호출된다.

#### Syntax

> function onRowUpdated(provider, row)

#### Parameters

> *provider*
> Type: [LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> *row*
> Type: Number
> 수정된 데이터행이다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowUpdated = function (provider, row) {
        var values = provider.getRow(row);

        $("#txtUserId2").val(values.UserId);
        $("#txtUserName2").val(values.UserName);
        $("#txtAge2").val(values.Age);
        $("#txtGender2").val(values.Gender);
        $("#txtPhone2").val(values.MobilePhone);
        $("#txtMail2").val(values.Email);
    }
</pre>

