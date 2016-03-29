---
layout: apipost
title: setColumnFilterActions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnFilterActions/
tags:
  - filter
  - columnFilter
  - 필터
  - 사용자필터
---


#### Description

> 컬럼 필터 리스트에 사용자가 임의의 동작을 할 수 있는 filter action을 추가한다. 

#### Syntax

> function setColumnFilterActions(column, actions)

#### Parameters

> **column**  
> Type: String\|Object  
> column명 또는 [Column](/api/types/DataColumn/)객체이다.  

> **actions**  
> Type: Object  
> [ColumnFilterAction](/api/types/ColumnFilterAction/)객체이다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    gridView.onFilterActionClicked = function (grid, column, action, x, y) {
        console.log("onFilterActionClicked");
        if (action == "autoFilter") {
            var offset = $("#realgrid").offset();
            /* 그리드가 표시되는 DIV의 좌표를 구해온다 */
            showAutoFiltering(column, x + offset.left, y + offset.top);
        }
    };
.
.
.
function setFilterActions() {
    var actions = [{
        name: "autoFilter",
        text: "Auto Filter",
        description: "100개의 순차 데이터중 선택하여 filter하는 action."
    }];

    gridView.setColumnFilterActions('CustomerID', actions);
    gridView.setColumnFilterActions('OrderID', actions);
    /* filterAction추가 */
}

var autoFiltercolumn;
var autoFilterItems = [];

function showAutoFiltering(column, x, y) {
	autoFiltercolumn = column;
	var fieldName = gridView.columnByName(column).fieldName;
	var values = dataProvider.getDistinctValues(fieldName, 100);// 

	var span = $("#spanFilters");
	span.empty();
	values.forEach(function (v) {
		var label = $("&lt;label /&gt;").appendTo(span);
		var existsFilter = autoFilterItems.indexOf(v) >= 0;
		$("&lt;input /&gt;", { type: "checkbox", name: "chkAutoFilterItem", value: v, checked: existsFilter}).appendTo(label);
		label.append(v);
		span.append("&lt;br/&gt;");
	});

	$("#divAutoFilter").css("left", x);
	$("#divAutoFilter").css("top", y);

	$("#divAutoFilter").show();
}

</pre>

#See Also
> [Columnfiltering Demo](http://demo.realgrid.com/Demo/ColumnFiltering), [onFilterActionClicked](/api/GridBase/onFilterActionClicked)