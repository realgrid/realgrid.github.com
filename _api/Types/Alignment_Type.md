---
layout: apipost
title: Alignment
part: Types
typename: Constants
order: Alignment
objectname: 
directiontype: 
permalink: /api/types/Alignment/
---

#### Description

> 그리드 스타일 중 textAlignment, lineAlignment 혹은 iconAlignment 등의 값을 지정하는 상수다.

#### Members

> **NEAR**  
> Value: "near"  
> 텍스트나 아이콘을 좌측으로 정렬하거나, 위쪽에 정렬한다.  

> **CENTER**  
> Value: "center"  
> 가운데나 중앙에 정렬한다.  

> **FAR**  
> Value: "far"  
> 우측이나 아래쪽에 정렬한다.  

### Example  

<pre class="prettyprint">
	var columns = [{
        "name": "OrderID",
        "fieldName": "OrderID",
        "type": "data",
        "width": "90",
        "styles": {
            "textAlignment": "near"
        },
        "header": {
            "text": "Order"
        }
    }, {
        "name": "CustomerID",
        "fieldName": "CustomerID",
        "type": "data",
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
        "type": "data",
        "width": "100",
        "styles": {
            "textAlignment": "far"
        },
        "header": {
            "text": "Employee ID"
        }
	}]
	gridView.setColumns(columns);
</pre>

#### See Also

> [Style Properties](http://demo.realgrid.com/Demo/StylesProperties) 참조  