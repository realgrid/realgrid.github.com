---
layout: apipost
title: onEditSearch
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditSearch/
---


#### Description

> [SearchCellEditor\|Search Editor](/api/GridBase/)에서 searchLength와 searchDelay조건이 만족하면 발생한다.

#### Syntax

> function onEditSearch(id, index, text)

#### Arguments

> **id**
> Type: [GridView\|GridView](/api/GridBase/)
> GridView 컨트롤

> **index**
> Type:  [CellIndex\|CellIndex](/api/GridBase/)
> 변경된 CellIndex

> **text**
> Type: **
> 편집전 셀의 데이터 값

#### Return

None.

#### Example

<pre class="prettyprint">
    var CustomerNames = ["ALFKI", "ANATR", "ANTON", "AROUT", "BERGS", "BLAUS", "BLONP", "BOLID", "BONAP"];
    grdMain.onEditSearch = function (grid, index, text) {
        console.log("onEditSearch:" + index.itemIndex + "," + index.column + ", " + text);
        var items = CustomerNames.filter(function (str) {
            return str.indexOf(text) == 0;
        });
        console.log(items);
        grdMain.fillEditSearchItems(index.column, text, items);
    };
</pre>

