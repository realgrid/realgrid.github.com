---
layout: apipost
title: updateRow
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/updateRow/
tags:
  - 필드값 수정
  - 데이터 수정
  - 행 수정
---


#### Description

> 지정한 데이터행의 필드 값들을 수정한다. values 매개변수로 넘겨지는 값은 Array이거나 Json 객체일 수 있다.

#### Syntax

> function updateRow(row, values)

#### Parameters

> **row**  
> Type: number  
> 수정할 데이터행 인덱스.  

> **values**  
> Type: Array\|object  
> 필드값의 배열이거나 object.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var values = {
        UserId: $("#txtUserId").val(),
        UserName: $("#txtUserName").val(),
        Age: $("#txtAge").val(),
        Gender: $("#txtGender").val(),
        MobilePhone: $("#txtPhone").val(),
        Email: $("#txtMail").val()
    };
    dataProvider.updateRow(row, values);
</pre>

