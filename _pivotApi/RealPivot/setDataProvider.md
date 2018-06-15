---
layout: apipost
title: setDataProvider
part: Objects
objectname: setDataProvider
directiontype: Function
permalink: /pivotApi/RealPivot/setDataProvider/
tags:
  - 프로바이더   
---


#### Description

 그리드에 [Data Provider](/api/LocalDataProvider/)를 연결한다.

#### Syntax

> function setDataProvider(provider)

#### Parameters

> **provider**   
> Type: [LocalDataProvider](/api/LocalDataProvider/)   
> Data Provider   

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
$(function() { 	
	dataProvider = new RealGridJS.LocalDataProvider();
	setFields(dataProvider);

    pivot = new RealPivot(id);
    pivot.setDataProvider(dataProvider);
    pivot.drawView();
});

function setFields(provider) {
    var fields = [{
        fieldName: "OrderID"
    }, {
        fieldName: "CustomerID"
    }, {
        fieldName: "EmployeeID"
    }, {
        fieldName: "Quantity",
        dataType: "number"
    }, {
        fieldName: "UnitPrice",
        dataType: "number"
    }];
 
    provider.setFields(fields);
}    
</pre>

---

