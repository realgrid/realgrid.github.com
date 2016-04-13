---
layout: apipost
title: onDataChanged
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onDataChanged/
tags:
  - 데이터 변경 이벤트
  - key
  - setValue
  - 데이터 변경시 호출
---

#### Description

> LocalDataProvider에 데이터가 변경되면 호출된다.  
> key 입력이나 setValue로 변경되었을때 호출된다.  

#### Syntax

> function onDataChanged(provider)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

#### Return

> None.

##### Examples 

<pre class="prettyprint">
    dataProvider.onDataChanged = function (provider) {
        alert("DataChanged");
    };
</pre>

