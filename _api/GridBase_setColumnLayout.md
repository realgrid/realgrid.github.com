---
layout: apipost
title: setColumnLayout
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnLayout/
---


#### Description

> 그리드의 컬럼 레이아웃을 설정한다.

#### Syntax

> function setColumnLayout(layout)

#### Parameters

> **layout**
> Type: Array of String
> 그리드에 표시할 column명들 

#### Return value

> none

#### Example

<pre class="prettyprint">
    var layout = [
        "OrderID", "EmployeeID", "OrderDate", "CompanyName", "CustomerID"
    ];
 
    //grdMain.restoreColumns();
    grdMain.setColumnLayout(layout);
</pre>
