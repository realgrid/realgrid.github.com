---
layout: apipost
title: beginUpdate
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/beginUpdate/
tags:
  - event
---


#### Description

 그리드와 관련된 속성들이 변경될 때마다 내부적인 변경 처리 호출을 요청하게 되는 데,   
 beginUpdate() 를 호출하면 endUpdate()가 호출되기 전 까지는 변경 처리 호출이 지연됩니다.  

#### Syntax

> function beginUpdate()  

#### Parameters

> None.  

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
gridview.beginUpdate();
try {
    gridview.displayOptions( { ... });
    gridview.selectOptions( { ... });
    ...
} finally {
    gridview.endUpdate();
}

</pre>

---

#### API Links

* [endUpdate](/api/GridBase/endUpdate)



