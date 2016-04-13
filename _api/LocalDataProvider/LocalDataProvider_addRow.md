---
layout: apipost
title: addRow
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/addRow/
tags:
  - 마지막 행 추가
  - 행 추가 이벤트
  - 마지막 데이터행
  - json객체
  - onRowInserting
  - onRowInserted
  - onRowCountChanged
---


#### Description

> LocalDataProvider의 마지막 행 다음에 새로운 행을 추가한다.  
> 추가하기 직전에 [onRowInserting](/api/LocalDataProvider/onRowInserting/), 호출된 후 [onRowInserted](/api/LocalDataProvider/onRowInserted/), [onRowCountChanged](/api/LocalDataProvider/onRowCountChanged/) 이벤트가 순서대로 발생한다.

#### Syntax

> function addRow(values)

#### Parameters

> **values**  
> Type: Array \| Object  
> 필드값의 배열이나 필드들을 속성으로 하는 json 객체.  

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
    try {
        dataProvider.addRow(values);
    } catch(err) {
        alert(err);
    }
</pre>

