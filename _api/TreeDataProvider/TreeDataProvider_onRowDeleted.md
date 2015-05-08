---
layout: apipost
title: onRowDeleted
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowDeleted/
---


#### Description

> TreeDataProvider에서 데이터행이 삭제된 후 호출된다.
> softDeleting = true 일 경우 호출되지 않는다.

#### Syntax

> function onRowDeleted(provider, rowId);  

#### Parameters
  
> **provider**  
> Type: TreeDataProvider  
> TreeDataProvider object.  

> **rowId**  
> Type: Number  
> 삭제되는 데이터행의 id  

#### Return value

> None.  

#### Example

<pre class="prettyprint">
	provider.onRowDeleted = function (provider, rowId) {
		alert("OK -> row = " + rowId);
	}
</pre>

