---
layout: apipost
title: PivotField
part: Types
typename: Classes
order: PivotField
objectname: 
directiontype: 
permalink: /pivotApi/types/PivotField/
tags: 
  - PivotField
  - 피펏필드
  - 피봇필드
  - 필드
---

#### Description


#### Properties

> **name**  
> Type: String   
> Default: null       
> 이름    

> **sourceField**  
> Type: String   
> Default: null       
> 참조 그리드 필드    

> **fieldHeader**  
> Type: String   
> Default: null       
> 고정으로 표시될 값    

> **dateType**  
> Type: String   
> Default: null       
> 날짜 타입 설정  

> **labelEnable**  
> Type: Boolean   
> Default: true       
> label 표시 여부  

> **valueEnable**  
> Type: Boolean   
> Default: true       
> value 표시 여부  

> **filterEnable**  
> Type: Boolean   
> Default: true       
> filter 설정 여부    

> **displayLabels**  
> Type: String   
> Default: null       
> 실제 field값 대신 표시    

> **displayFormat**  
> Type: String   
> Default: null       
> 현재 값을 표시할 포맷 형식    

> **displayField**  
> Type: String   
> Default: null       
> 실제 field값 대신 표시할 field    

> **summaryHeader**  
> Type: String   
> Default: null       
> 고정 표시값  

> **summaryFormat**  
> Type: String   
> Default: null       
> 동적 표시값   

> **expression**  
> Type: String   
> Default: null       
> value 표현 방식 설정  

> **numberFormat**  
> Type: String   
> Default: null       
> 숫자 포맷 설정    

> **prefix**  
> Type: String   
> Default: null       
> value 앞에 추가로 표시할 내용  

> **suffix**  
> Type: String   
> Default: null       
> value 뒤에 추가로 표시할 내용    

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
	    summaryFormat: "${value} 합",
	    valueEnable: false
	}, {
	    name: "EmployeeID",
	    fieldHeader: "처리자",
	    sourceField: "EmployeeID",
	    valueEnable: false
	}, {
	    name: "OrderYear",
	    sourceField: "OrderDate",
	    dateType: "year",
	    fieldHeader: "영업년도",
	    displayFormat: "${value}년도",
	    summaryFormat: "${value}년도 합",
	    valueEnable: false
	}, {
	    name: "OrderHalf",
	    sourceField: "OrderDate",
	    dateType: "half",
	    fieldHeader: "영업반기",
	    displayLabels: {
	        1: "상반기",
	        2: "하반기"
	    },
	    summaryFormat: "${label} 합",
	    valueEnable: false
	}, {
	    name: "OrderQuarter",
	    sourceField: "OrderDate",
	    dateType: "quarter",
	    fieldHeader: "영업분기",
	    displayLabels: { 
	        1: "일사분기",
	        2: "이사분기",
	        3: "삼사분기",
	        4: "사사분기"
	    },
	    summaryFormat : "${label} 합",
	    valueEnable: false
	}, {
	    name: "OrderMonth",
	    sourceField: "OrderDate",
	    dateType: "month",
	    fieldHeader: "영업월",
	    displayFormat: "${value}월",
	    summaryFormat: "${label} 합",
	    valueEnable: false
	}, {
	    name: "OrderWeekNo",
	    sourceField: "OrderDate",
	    dateType: "weekofyear",
	    fieldHeader: "영업년주차",
	    valueEnable: false
	}, {
	    name: "OrderMonthlyWeek",
	    sourceField: "OrderDate",
	    dateType: "weekofmonth",
	    fieldHeader: "영업월주차",
	    valueEnable: false
	}, {
	    name: "WeekDay", 
	    sourceField: "OrderDate",
	    dateType: "weekday",
	    fieldHeader: "영업요일",
	    valueEnable: false
	}, {
	    name: "OrderDay",
	    sourceField: "OrderDate",
	    dateType: "day",
	    fieldHeader: "영업일자",
	    displayFormat: "${value}일",
	    summaryFormat: "${value}일 합",
	    valueEnable: false
	}, {
	    name: "CompanyName",
	    sourceField: "CompanyName",
	    fieldHeader: "생산자",
	    valueEnable: false
	}, {
	    name: "ProductName",
	    sourceField: "ProductName",
	    fieldHeader: "품명 Product Name",
	    summaryFormat: "${value} 합",
	    valueEnable: false
	}, {
	    name: "Quantity",
	    sourceField: "Quantity",
	    fieldHeader: "판매량",
	    numberFormat: "#,##0.##",
	    labelEnable: false
	}, {
	    name: "UnitPrice",
	    sourceField: "UnitPrice",
	    fieldHeader: "판매액",
	    numberFormat: "#0.00",
	    labelEnable: false
	}]);	
</pre>

---


