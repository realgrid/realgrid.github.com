---
layout: apipost
title: ColumnGroupOrientation
part: Types
typename: Constants
order: ColumnGroupOrientation
objectname: 
directiontype: 
permalink: /api/types/ColumnGroupOrientation/
tags:
  - ColumnGroupOrientation
  - ColumnOrientation
  - GroupOrientation
  - 컬럼그룹방향
  - 컬럼방향
  - 그룹방향
  - 컬럼그룹핑방향
---

#### Description

 Group컬럼에서 하위 컬럼을 배치하는 방향을 정의합니다.

#### Members

> **HORIZONTAL**   
> Value: "horizontal"   
> 하위 컬럼들을 가로 방향으로 배치합니다.   

> **VERTICAL**     
> Value: "vertical"     
> 하위 컬럼들을 세로 방향으로 배치합니다.   

#### Examples   

<pre class="prettyprint">
var columns = [{
    "type": "group",
    "name": "GroupOrder",

    "orientation": "vertical",

    "resizable": true,
    "movable": false,
    "hideChildHeaders": false,
    "width": 250,
    "columns": [{
        "type": "group",
        "name": "GroupIds",
        "columns": [{
            "name": "OrderID",
            "fieldName": "OrderID",
            "type": "data",
            "width": "90",
            "styles": {
                "textAlignment": "center"
            },
            "header": {
                "text": "Order"
            }
        }, {
            "name": "CustomerID",
            "fieldName": "CustomerID",
            "width": "130",
            "styles": {
                "textAlignment": "center"
            },
            "header": {
                "text": "Customer ID"
            }
        }, {
            "name": "EmployeeID",
            "fieldName": "EmployeeID",
            "width": "100",
            "styles": {
                "textAlignment": "center"
            },
            "header": {
                "text": "Employee ID"
            }
        }]
    }, {
        "name": "OrderDate",
        "fieldName": "OrderDate",
        "width": "130",
        "styles": {
            "textAlignment": "center"
        },
        "header": {
            "text": "Order Date"
        }
    }]
}];

gridView.setColumns(columns);
</pre>

---

#### API Links

* [ColumnGroup](/api/types/ColumnGroup) 

#### Demo Links

* [Column Grouping Demo](http://demo.realgrid.com/Columns/ColumnGrouping/) 