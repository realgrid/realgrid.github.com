---
layout: apipost
title: setFieldMapping
part: Objects
objectname: setFieldMapping
directiontype: Function
permalink: /pivotApi/RealPivot/setFieldMapping/
tags:
  - 필드 맵핑
  - 필드 연결
---


#### Description

 피벗 그리드 필드에 [Data Provider](/api/LocalDataProvider/)의 필드를 맵핑한다.  
 날짜 필드의 경우 하나의 DataProvider 필드에서 데이터 유형별로 여러개의 피벗 필드를 매핑할 수 있다.  

#### Syntax

> function setFieldMapping(pivotFields)

#### Parameters

> **pivotFields**   
> Type: Array of [PivotField](/pivotApi/types/PivotField/)   
> 피벗 필드   

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    pivot.setFieldMapping([{
        name: "OrderID",
        sourceField: "OrderID",
        fieldHeader: "주문ID",
        valueEnable: false
    }, {
        name: "CustomerID",
        sourceField: "CustomerID",
        fieldHeader: "고객사",
        valueEnable: false,
        sortDir: "descending"
    }, {
        name: "EmployeeID",
        fieldHeader: "처리자",
        sourceField: "EmployeeID",
        valueEnable: false
    }, {
        name: "OrderYear",
        sourceField: "OrderDate",
        dateType: "year",
        fieldHeader: "년도",
        displayFormat: "<b>${value}년도</b>",
        summaryFormat: "${value}년도 합"
    }, {
        name: "OrderHalf",
        sourceField: "OrderDate",
        dateType: "half",
        fieldHeader: "반기"
    }, {
        name: "OrderQuarter",
        sourceField: "OrderDate",
        dateType: "quarter",
        fieldHeader: "분기",
        displayLabels: { 
            1: "일사분기",
            2: "이사분기",
            3: "삼사분기",
            4: "사사분기"
        },
        summaryFormat : "${label} 합"
    }, {
        name: "OrderMonth",
        sourceField: "OrderDate",
        dateType: "month",
        fieldHeader: "월",
        displayFormat: "${value}월",
        summaryFormat: "${label} 합"
    }, {
        name: "OrderWeekNo",
        sourceField: "OrderDate",
        dateType: "weekofyear",
        fieldHeader: "년주차"
    }, {
        name: "OrderMonthlyWeek",
        sourceField: "OrderDate",
        dateType: "weekofmonth",
        fieldHeader: "월주차"
    }, {
        name: "WeekDay", 
        sourceField: "OrderDate",
        dateType: "weekday",
        fieldHeader: "요일"
    }, {
        name: "OrderDay",
        sourceField: "OrderDate",
        dateType: "day",
        fieldHeader: "일자",
        displayFormat: "${value}일",
        summaryFormat: "${value}일 합"
    }, {
        name: "CompanyName",
        sourceField: "CompanyName",
        fieldHeader: "생산자",
        valueEnable: false
    }, {
        name: "ProductName",
        sourceField: "ProductName",
        fieldHeader: "품명",
        valueEnable: false
    }, {
        name: "Quantity",
        sourceField: "Quantity",
        fieldHeader: "판매량",
        labelEnable: false
    }, {
        name: "UnitPrice",
        sourceField: "UnitPrice",
        fieldHeader: "판매액",
        labelEnable: false
    }]);  
</pre>

---

