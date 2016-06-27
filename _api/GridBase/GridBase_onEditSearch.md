---
layout: apipost
title: onEditSearch
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditSearch/
tags:
  - editor
  - search
---


#### Description

> [SearchCellEditor](/api/types/SearchCellEditor/)에서 searchLength와 searchDelay조건이 만족하면 발생한다.  
> 또는 Ctrl+Enter키 또는 Enter키를 입력시 발생한다.

#### Syntax

> function onEditSearch(id, index, text)  

#### Arguments

> **id**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type:  [CellIndex](/api/types/CellIndex/)  
> 변경된 CellIndex  

> **text**  
> Type: *  
> 셀이 입력된 값 

#### Return

None.

#### Example

<pre class="prettyprint">
    var CustomerNames = ["ALFKI", "ANATR", "ANTON", "AROUT", "BERGS", "BLAUS", "BLONP", "BOLID", "BONAP"];
    gridView.onEditSearch = function (grid, index, text) {
        console.log("onEditSearch:" + index.itemIndex + "," + index.column + ", " + text);
        var items = CustomerNames.filter(function (str) {
            return str.indexOf(text) == 0;
        });
        console.log(items);
        gridView.fillEditSearchItems(index.column, text, items);
    };

    /* ajax를 이용해서 처리하는 경우. */
    gridView.onEditSearch = function (grid, index, text) {
        if (index.column == "colName") {
            var data = {"serachKey":text},
            $.ajax({
                url : "/searchUrl",
                type:"post",
                data:data,
                success:function(data, textStatus) {
                    var labels = [];
                    var values = [];
                    if (data && data.resultList) {
                        for (var i = 0, size = data.resultList.length; i < size; i++) {
                            labels.push(data.resultList[i].codeName);
                            values.push(data.resultList[i].code);
                        }
                    }
                    grid.fillEditSearchItems(index.column, text, values, labels);
                }
            });
        }
    }
</pre>

#### See Also
> [fillEditSearchItems](/api/GridBase/fillEditSearchItems), [onGetEditValue](/api/GridBase/onGetEditValue)  
> [Search Editor](/tutorial/b7-10/), [Editor Demo](http://demo.realgrid.com/Demo/Editors)