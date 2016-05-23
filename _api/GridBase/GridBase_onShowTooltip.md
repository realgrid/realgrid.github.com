---
layout: apipost
title: onShowTooltip
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onShowTooltip/
jsonly: true
tags:
  - tooltip
  - 툴팁
  - 툴팁 콜백  
---

#### Description

> 데이터셀의 툴팁이 표시될때 발생하는 콜백 함수이다. return 되는 값이 툴팁에 표시된다. 아무것도 return 하지 않으면 데이터 셀 값이 툴팁에 표시된다.  

#### Syntax

> function onShowTooltip (grid, index, value)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: number  
> 마우스 포인터가 위치한 영역의 인덱스 값  

> **index**  
> Type: string  
> 마우스 포인터가 위치한 데이터셀의 값  

#### Return

> Type: string  
> 툴팁에 표시할 값    

#### Examples 

<pre class="prettyprint">
	gridView.onShowTooltip = function (grid, index, value) {
	    var column = index.column;
	    var itemIndex = index.itemIndex;
	     
	    var tooltip = value;
	    if (column == "OrderID") {
	        tooltip = "No: " + value +
	            "\r\nSales Emp: " + grid.getValue(itemIndex, "EmployeeID") +
	            "\r\nProduct:" + grid.getValue(itemIndex, "ProductName") +
	            "\r\nQty:" + grid.getValue(itemIndex, "Quantity");
	    } else if (column == "CustomerID") {
	        tooltip = "Id: " + value +
	            "\r\nName: " + grid.getValue(itemIndex, "CompanyName") +
	            "\r\nPhone:" + grid.getValue(itemIndex, "Phone");
	    } else if (column == "ShipVia") {
	        tooltip = "ShipVia: " + value +
	            "\r\nShip Name: " + grid.getValue(itemIndex, "ShipName") +
	            "(" + grid.getValue(itemIndex, "ShipAddress") +  " " +
	                  grid.getValue(itemIndex, "ShipCity") + " " +
	                  grid.getValue(itemIndex, "ShipCountry") +  ")" +
	            "\r\nFreight:" + grid.getValue(itemIndex, "Freight");
	    }
	    return tooltip;
	}
</pre>

#### Demo Links
> [Tooltip](http://demo.realgrid.com/Demo/ColumnTooltip)