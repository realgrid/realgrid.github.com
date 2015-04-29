---
layout: apipost
title: fillEditSearchItems
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/fillEditSearchItems/
---


#### Description

> 입력값과 관련된 항목을 조회하여 list에 표시한다. 부분검색 용도로 사용된다.

#### Syntax

> function fillEditSearchItems (column, searchKey, values, labels)

#### Parameters

> *column*
> Type: String|Object
> list가 표시될 컬럼의 name 또는 Column객체이다.

> *searchKey*
> Type: String
> 검색 키값이다.

> *values*
> Type: Array of String
> 검색된 value값들

> *labels*
> Type: Array of String
> 검색된 label값들

#### Return value

> None.


#### Example

<pre class="prettyprint">
    var CustomerNames = ["ALFKI", "ANATR", "ANTON", "AROUT", "BERGS", "BLAUS"];
    grdMain.onEditSearch = function (grid, index, text) {
        console.log("onEditSearch:" + index.itemIndex + "," + index.column + ", " + text);
        var items = CustomerNames.filter(function (str) {
            return str.indexOf(text) == 0;
        });
        console.log(items);
        grdMain.fillEditSearchItems(index.column, text, items);
    };
</pre>

