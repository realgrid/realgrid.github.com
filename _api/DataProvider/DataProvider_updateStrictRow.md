---
layout: apipost
title: updateStrictRow
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/updateStrictRow/
tags:
  - 데이터 수정
  - 기존 데이터 수정
  - 데이터 변경
---


#### Description

 row로 지정된 기존 데이터행의 값을 수정.  
 undefined로 지정하거나 명시되지 않은 경우 기존의 값을 유지한다.

#### Syntax

> function updateStrictRow(row, values)  

#### Parameters

> **row**  
> Type: number  
> 수정할 행을 지정한다.  

> **values**  
> Type: array\|object  
> 필드값의 배열이거나 object.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    var values = {
        UserId: $("#txtUserId").val(),
        UserName: $("#txtUserName").val(),
        Age: $("#txtAge").val(),
        Gender: $("#txtGender").val(),
        MobilePhone: $("#txtPhone").val(),
        Email: $("#txtMail").val()
    };
    dataProvider.updateStrictRow(row, values);
</pre>

