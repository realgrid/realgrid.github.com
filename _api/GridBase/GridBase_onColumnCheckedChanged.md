---
layout: apipost
title: onColumnCheckedChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onColumnCheckedChanged/
tags:
  - check
  - event
  - columnCheck
---

#### Description

> 사용자가 컬럼 헤더의 체크박스를 클릭했을 때 호출된다.  

#### Syntax

> function onColumnCheckedChanged (grid, column, checked)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: object  
> [ColumnGroup](/api/types/ColumnGroup/) 혹은 [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

> **checked**  
> Type: boolean  
> 체크 여부  


#### Return

> None.  

#### Example

<pre class="prettyprint">

    var columns = [{
        "name": "OrderDate",
        "fieldName": "OrderDate",
        "width": "130",
        "styles": {
            "textAlignment": "center"
        },
        "header": {
            "text": "Order Date",
            "checked": true,
            "checkLocation": "left"
        }
    }];

    gridView.setColumns(columns);
    ....

    gridView.onColumnCheckedChanged = function (grid, column, checked) {
        console.log("onColumnCheckedChanged: " + "(" + column.name + ", " + checked + ")");
    };
</pre>

