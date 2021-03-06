---
layout: apipost
title: onRowAdded
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowAdded/
---

#### Description

 TreeDataProvider에 데이터가 추가되면 발생하는 이벤트 함수.  

#### Syntax

> function onRowAdded (provider, rowId)

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**
> number  
> 데이터 행의 트리 아이디.  

#### Return  

> None.  
  
#### Examples   

<pre class="prettyprint">
treeProvider.onRowAdded = function (provider, rowId) {
    console.log(rowId);
};
</pre>

---

#### Demo Links

* [TreeView Editing](http://demo.realgrid.com/Tree/TreeEditing){:target="_blank"}  