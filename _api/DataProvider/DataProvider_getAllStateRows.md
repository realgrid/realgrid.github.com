---
layout: apipost
title: getAllStateRows
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getAllStateRows/
tags:
  - 해당 상태의 행 번호
  - stateBar icon
  - 상태 아이콘
---


#### Description

 RowState가 "none"이 아닌 모든 행의 번호를 상태별로 가져온다.

#### Syntax

> function getAllStateRows()

#### Parameters

> None.

#### Return value

> Type: object  
> "created", "updated", "deleted", "createAndDeleted" 상태 이름들을 속성으로 갖는 object. 각 속성의 값은 해당 상태의 행 번호 배열이다. 


#### Examples 

<pre class="prettyprint">
    var rows = provider.getAllStateRows();
</pre>

---

#### Demo Links

* [RowState](http://demo.realgrid.com/Editing/RowStates/){:target="_blank"} 참조 
