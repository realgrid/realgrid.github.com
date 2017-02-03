---
layout: apipost
title: setColumn
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumn/
jsonly: true
versions:
    - JS 1.1.22+
tags:
  - 컬럼추가
  - column
  - 컬럼설정
---

#### Description

 그리드에 설정되어 있는 컬럼들 외에 추가로 컬럼을 설정할때 사용한다.    
 

#### Syntax

> function setColumn(column)

#### Parameters

> **column**  
> Type: Object   
> [ColumnGroup](/api/types/ColumnGroup/)이나 [DataColumn](/api/types/DataColumn/)과 같은 내용으로 구성되는 object다.  

> **group**  
> Type: String | Object   
> [[ColumnGroup](/api/types/ColumnGroup/)이나 그룹명을 지정한다.  

> **index**  
> Type: Number   
> 해당 컬럼이 위치할 인덱스를 지정한다.(숨김컬럼 포함)     
> 값을 지정하지 않으면 컬럼의 가장 마지막에 추가된다.  

#### Return value

> Type: Object
> [ColumnGroup](/api/types/ColumnGroup/)이나 [DataColumn](/api/types/DataColumn/)과 같은 내용으로 구성되는 object다.  

#### Examples 

<pre class="prettyprint">
var column = {
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
};

var groupColumn = gridView.addColumn(column, null);

var column1 = {
    "name": "EmployeeID",
    "fieldName": "EmployeeID",
    "width": "100",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Employee ID"
    }
};

gridView.addColumn(column1, groupColumn, 0);
</pre>

---
