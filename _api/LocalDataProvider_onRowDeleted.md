---
layout: apipost
title: onRowDeleted
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowDeleted/
---


#### Description

> LocalDataProvider에서 데이터행이 삭제된 후 호출된다.
> softDeleting = true 일 경우 호출되지 않는다.

#### Syntax

> function onRowDeleted(provider, row);

#### Parameters

> *provider*
> Type: [LocalDataProvider|LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> *row*
> Type: Number
> 삭제되는 데이터행의 id

#### Return value

> None.

#### Example

<pre class="prettyprint">
	provider.onRowDeleted = function (provider, row) {
		alert("OK -> row = " + row);
	}
</pre>

