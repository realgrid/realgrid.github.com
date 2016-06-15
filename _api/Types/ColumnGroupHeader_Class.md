---
layout: apipost
title: ColumnGroupHeader
part: Types
typename: Classes
order: ColumnGroupHeader
objectname: 
directiontype: 
permalink: /api/types/ColumnGroupHeader/
tags:
  - ColumnGroup
  - Column
  - Group
  - ColumnGrouping
  - 컬럼그룹
  - 컬럼
  - 그룹
  - 컬럼그룹핑
  - ColumnGroupHeader
  - GroupHeader
  - Header
  - 컬럼그룹헤더
  - 그룹헤더
  - 헤더
---

#### Description

 그리드 헤더 영역에 표시되는 컬럼그룹 헤더에 대한 설정 정보를 관리한다.  
 그리드 헤더가 표시되는 경우라면 항상 표시되는 컬럼헤더와 달리 visible 값을 false로 하면 컬럼그룹 헤더가 표시되지 않는다.

#### Properties

> **text**  
> Type: String   
> Default: null     
> 컬럼그룹 헤더에 표시될 문자열을 지정한다. 이 값이 null 이면  컬럼그룹의 이름을 표시한다.

> **visible**  
> Type: Boolean   
> Default: true     
> 컬럼그룹 헤더를 표시할 것인 지를 지정한다. 

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
    "header": {
    	"text": "GroupOrder Hader",
        "visible": true
    },
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

* [Column Grouping](http://demo.realgrid.net/Demo/ColumnGrouping) 