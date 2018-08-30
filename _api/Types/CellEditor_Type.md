---
layout: apipost
title: CellEditor
part: Types
typename: Constants
order: CellEditor
objectname: 
directiontype: 
permalink: /api/types/CellEditor/
tags:
    - 셀편집기
---

#### Description

데이터 셀 편집기(Cell Editor)의 유형을 정의한다.

#### Members

> **LINE**      
> Value: "line"     
> [LineCellEditor](/api/types/LineCellEditor)유형으로 단일 라인의 일반 텍스트 편집에 사용된다.                 

> **MULTILINE** 
> Value: "multiLine"     
> [MultiLineCellEditor](/api/types/MultiLineCellEditor)유형으로 다중라인 텍스트 편집에 사용된다.      

> **SEARCH**  
> Value: "search"   
> [SearchCellEditor](/api/types/SearchCellEditor)유형, 원하는 셀 데이터를 찾을 수 있다.

> **DROPDOWN**  
> Value: "dropDown"     
> [DropDownCellEditor](/api/types/DropDownCellEditor)유형, KEY <-> VALUE 조합의 데이터 목록중 하나의 항목을 선택하는 선택형 편집에 사용된다.     

> **NUMBER**    
> Value: "number"   
> [NumberCellEditor](/api/types/NumberCellEditor)유형, 숫자 전용 편집에 사용된다                

> **DATE**      
> Value: "date"      
> [DateCellEditor](/api/types/DateCellEditor)유형으로 날짜를 입력하거나 달력을 펼쳐 날짜를 선택 할 수 있다.      

> **BTDATE**      
> Value: "btdate"      
> 외부 달력 컴포넌트인 bootstrap-datepicker([BTDateCellEditor](/api/types/BTDateCellEditor))유형으로 날짜를 입력하거나 달력을 펼쳐 날짜를 선택 할 수 있다.    

#### Examples   

<pre class="prettyprint">
var columns = [{
    "name": "OrderID",
    "fieldName": "OrderID",
    "width": "90",
    "styles": {
        "numberFormat": "#,##0"
    },
    "header": {
        "text": "Text editor"
    }
}, {
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "width": "150",
    "lookupDisplay": true,
    "values": ["VINET", "HANAR", "SUPRD", "VICTE", "THREE", "SEVEN"],
    "labels": [&quot;&lt;VINET&gt;&quot;, &quot;&lt;HANAR&gt;&quot;, &quot;&lt;SUPRD&gt;&quot;, &quot;&lt;VICTE&gt;&quot;, &quot;&lt;THREE&gt;&quot;, &quot;&lt;SEVEN&gt;&quot;],
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
        "textWrap": "explicit" // js버전에만 적용.
    },
    "header": {
        "text": "Multiline Edit"
    }
}]

gridView.setColumns(columns);
</pre>                  

---

#### Demo Links

* [Editors Demo](http://demo.realgrid.com/Editing/Editors/)
