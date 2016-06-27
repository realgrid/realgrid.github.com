---
layout: apipost
title: setColumnLayout
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnLayout/
deprecated: true
---


#### Description

> 그리드의 컬럼 레이아웃을 설정한다.
> deprecated 대상.  
> 대신 [registerColumnLayouts](/api/GridBase/registerColumnLayouts)를 사용하세요.  

#### Syntax

> function setColumnLayout(layout)

#### Parameters

> **layout**  
> Type: Array of String  
> 그리드에 표시할 column명들   

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var layout = [
        "OrderID", "EmployeeID", "OrderDate", "CompanyName", "CustomerID"
    ];
 
    //grdMain.restoreColumns();
    grdMain.setColumnLayout(layout);
</pre>
