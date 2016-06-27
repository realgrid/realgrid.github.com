---
layout: apipost
title: fillEditSearchItems
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/fillEditSearchItems/
tags:
  - searchEditor
  - onEditResult
  - onEditSearch
---


#### Description

> 입력값과 관련된 항목을 조회하여 list에 표시한다. 부분검색 용도로 사용된다.  

#### Syntax

> function fillEditSearchItems (column, searchKey, values, labels)  

#### Parameters

> **column**  
> Type: String\|Object  
> list가 표시될 컬럼의 name 또는 Column객체이다.  

> **searchKey**  
> Type: String  
> 검색 키값이다.  

> **values**  
> Type: Array of String  
> 검색된 value값들  

> **labels**  
> Type: Array of String  
> 검색된 label값들  

#### Return value

> None.  


#### Example

<pre class="prettyprint">
    var CustomerNames = ["ALFKI", "ANATR", "ANTON", "AROUT", "BERGS", "BLAUS"];

    dataProvider.setFields([
    	{fieldName:"code"},
    	{fieldName:"codeName"} /* 코드명을 가지고 있는 field */
    ]);

    gridView.setColumns([
    	{fieldName:"code", 
    	 name:"code", 
    	 editor:{type:"search",searchLength:1, searchDelay:500, useCtrlEnterKey:true, useEnterKey:true },
    	 lookupDisplay:true,
    	 labelField:"codeName"  
    	}
    ]);

    /* 마지막 키가 입력되고 searchDelay가 지나면 발생되는 이벤트 */
    gridView.onEditSearch = function (grid, index, text) {
        console.log("onEditSearch:" + index.itemIndex + "," + index.column + ", " + text);
        var values = CustomerNames.filter(function (str) {
            return str.indexOf(text) == 0;
        });
        var labels = CustomerNames.filter(function (str) {
        	return str.indexOf(text) == 0;
        })
        console.log(values);
        gridView.fillEditSearchItems(index.column, text, values, labels);
    };

    /* searchEditor에서 선택이 되며 발생되는 이벤트 */
    gridView.onGetEditValue = function (grid, index, editResult) {
        if (index.column === "code") {
            grid.setValue(index.itemIndex, "codeName",editResult.text);
        };
    };
</pre>

#### See Also
> [SearchCellEditor](/api/types/SearchCellEditor/) 참조  
> [onEditSearch](/api/GridBase/onEditSearch)