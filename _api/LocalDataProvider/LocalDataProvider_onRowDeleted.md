---
layout: apipost
title: onRowDeleted
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowDeleted/
tags:
  - 데이터행 삭제 후 호출
  - 삭제 후
  - 삭제 이벤트
---


#### Description

 LocalDataProvider에서 데이터행이 삭제된 후 호출된다.  
 softDeleting = true 일 경우 호출되지 않는다.

#### Syntax

> function onRowDeleted(provider, row);

#### Parameters

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.

> **row**  
> Type: Number  
> 삭제되는 데이터행의 id

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
dataProvider.onRowDeleted = function (provider, row) {
	alert("OK -> row = " + row);
}
</pre>

