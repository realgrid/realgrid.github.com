---
layout: apipost
title: onRowDeleted
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowDeleted/
tags:
 - 행 삭제 이벤트
---


#### Description

> TreeDataProvider에서 데이터행이 삭제된 후 호출된다.
> [softDeleting = true](/api/DataProvider/DataProviderOptions/) 일 경우 Row의 State가 Deleted로 변경된 것 만으로는 호출되지 않는다.  완전히 TreeDataProvider에서 삭제되었을 때 발생.

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

#### Examples 

<pre class="prettyprint">
	treeProvider.onRowDeleted = function (provider, rowId) {
		alert("deleted rowId = " + rowId);
	}
</pre>

---

#### Demo Links
#### See Also

#### See Also

> [TreeView Editing](http://demo.realgrid.net/Demo/TreeEditing){:target="_blank"} 참조   