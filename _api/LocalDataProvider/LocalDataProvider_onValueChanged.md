---
layout: apipost
title: onValueChanged
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onValueChanged/
tags:
  - 데이터 변경 후
  - 데이터 변경 이벤트
---


#### Description

 [LocalDataProvider.setValue](/api/LocalDataProvider/setValue/)를 이용하여 데이터를 변경한후 호출된다.

#### Syntax

> function onValueChanged(provider, row, field);

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **row**  
> Number  
> 수정된 데이터행의 Index  

> **field**  
> Number  
> 수정된 데이터Field의 Index  

#### Return

> None.

#### Examples 

<pre class="prettyprint">
dataProvider.onValueChanged = function (provider, row, field) {
    consloe.log("onValueChanged: " + row + ", " + field);
};
</pre>

