---
layout: apipost
title: setColumnFilterActions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnFilterActions/
---


#### Description

> 컬럼 필터 리스트에 사용자가 임의의 동작을 할 수 있는 filter action을 추가한다. 

#### Syntax

> function setColumnFilterActions(column, actions)

#### Parameters

> *column*
> Type: String|Object
> column명 또는 [DataColumn|Column](/api/GridBase/)객체이다.

> *actions*
> Type: Object
> [ColumnFilterAction](/api/GridBase/)객체이다.

#### Return value

> none

#### Example

<pre class="prettyprint">
    grdMain.onFilterActionClicked = function (grid, column, action, x, y) {
        console.log("onFilterActionClicked");
        if (action == "autoFilter") {
            var offset = $("#realgrid").offset();
 
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

    grdMain.setColumnFilterActions('CustomerID', actions);
    grdMain.setColumnFilterActions('OrderID', actions);

    $("#btnFilter").attr("disabled", "disabled");
    $("#txtFilter").text("'CustomerId' 컬럼에 필터가 설정됐습니다.");
}

var autoFiltercolumn;
var autoFilterItems = [];

function showAutoFiltering(column, x, y) {
	autoFiltercolumn = column;
	var fieldName = grdMain.columnByName(column).fieldName;
	var values = [];
	if (realgridType == "js") {
		var values = dataProvider.getFieldValues(fieldName);

		var uniValues = {};
		for (var idx in values) {
			if (idx >= 100) {
				break;
			}
			uniValues[values[idx](/api/GridBase/) = 1;
		};
		values = Object.keys(uniValues).sort();
	}else {
		values = dataProvider.getDistinctValues(fieldName, 100);// getDistinctValues가 생길때까지..
	};

	var span = $("#spanFilters");
	span.empty();
	values.forEach(function (v) {
		var label = $("<label />").appendTo(span);
		var existsFilter = autoFilterItems.indexOf(v) >= 0;
		$("<input />", { type: "checkbox", name: "chkAutoFilterItem", value: v, checked: existsFilter}).appendTo(label);
		label.append(v);
		span.append("<br/>");
	});

	$("#divAutoFilter").css("left", x);
	$("#divAutoFilter").css("top", y);

	$("#divAutoFilter").show();
}

</pre>
