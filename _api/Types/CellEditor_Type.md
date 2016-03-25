---
layout: apipost
title: CellEditor
part: Types
typename: Constants
order: CellEditor
objectname: 
directiontype: 
permalink: /api/types/CellEditor/
---

#### Description

> 셀의 Editor 유형을 정의합니다.

#### Members

> **LINE**      
> Value: "line"     
> 일반 Text 에디터                 

> **MULTILINE** 
> Value: "multiLine" 
> 다중라인 Text 에디터             

> **DROPDOWN**  
> Value: "dropDown" 
> 여러 개 중 선택하는 Combo 에디터 

> **NUMBER**    
> Value: "number"   
> 숫자 에디터                      

> **DATE**      
> Value: "date"      
> 날짜 에디터    

### Example  

<pre class="prettyprint">
	var columns = [{
        "name": "OrderID",
        "fieldName": "OrderID",
        "width": "90",
        "styles": {
            "numberFormat": "#,##0"
        }
        "header": {
            "text": "Text editor"
        }
    }, {
        "name": "CustomerID",
        "fieldName": "CustomerID",
        "width": "150",
        "lookupDisplay": true,
        "values": ["VINET", "HANAR", "SUPRD", "VICTE", "THREE", "SEVEN"],
        "labels": ["<VINET>", "<HANAR>", "<SUPRD>", "<VICTE>", "<THREE>", "<SEVEN>"],
        "editor": {
            "type": "dropDown",
            "dropDownCount": 4
        },
        "header": {
            "text": "DropDown Edit"
        }
    }, {
        "name": "CustomerID3",
        "fieldName": "CustomerID",
        "width": "150",
        "editor": {
            "type": "search",
            "searchLength": 1,  
            "searchDelay": 1000,
            "useCtrlEnterKey": true,
            "useEnterKey": true
        },
        "header": {
            "text": "Search Editor "
        }
    }, {
        "name": "OrderDate",
        "fieldName": "OrderDate",
        "width": "180",
        "editor": {
            "type": "date",
            "datetimeFormat": "yyyy.MM.dd"
        },
        "styles": {
            "textAlignment": "center",
            "datetimeFormat": "yyyy.MM.dd"
        },
        "header": {
            "text": "Date Edit"
        }
    }, {
        "name": "Quantity",
        "fieldName": "Quantity",
        "width": "100",
        "editor": {
            "type": "number"
        },
        "styles": {
            "textAlignment": "far",
            "numberFormat": "#,000"
        },
        "header": {
            "text": "Number Edit"
        }
    }, {
        "name": "CompanyName",
        "fieldName": "CompanyName",
        "width": "200",
        "editor": {
            "type": "multiline"
        },
        "styles": {
            textWrap: "explicit" // js버전에만 적용.
        },
        "header": {
            "text": "Multiline Edit"
        }
	}]
	gridView.setColumns(columns);
</pre>                  

#### See Also

> [Editors Demo](http://demo.realgrid.net/Demo/Editors) 참조
