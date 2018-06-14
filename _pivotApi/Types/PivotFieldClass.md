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
피벗 그리드를 구성하는 필드의 설정 모델이다.

#### Properties

> **name**  
> Type: String   
> Default: null       
> 필드 식별 명칭    

> **sourceField**  
> Type: String   
> Default: null       
> DataProvider의 원본데이터 필드에 해당하는 fieldName    

> **fieldHeader**  
> Type: String   
> Default: null       
> 필드 헤더, name 대신 피벗 그리드내에 표시할 내용.    

> **dateType**  
> Type: DateValueType   
> Default: null       
> 날짜 타입 설정  

> **labelEnable**  
> Type: Boolean   
> Default: true       
> UI에서 필드를 컬럼, 행 영역에 추가할 수 있는지의 여부  

> **valueEnable**  
> Type: Boolean   
> Default: true       
> UI에서 필드를 값 영역에 추가할 수 있는지의 여부  

> **filterEnable**  
> Type: Boolean   
> Default: true       
> UI에서 필드를 필터 영역에 추가할 수 있는지의 여부    

> **displayLabels**  
> Type: Object   
> Default: null       
> 행/컬럼 라벨에 필드 값 대신 표시할 내용, value:label 형식으로 지정    
> Example: {0: "상반기", 1: "하반기"}  

> **displayFormat**  
> Type: String   
> Default: null       
> 행/컬럼 라벨에 필드 값을 표시할 포맷 형식    
> Example: "${value+1} 월"

> **displayField**  
> Type: String   
> Default: null       
> 행/컬럼 라벨에 실제 필드 값 대신 표시할 필드의 name    

> **summaryHeader**  
> Type: String   
> Default: null       
> 행/컬럼 그룹 요약 라빌에 표시할 고정 값  
> Example: "요약"  

> **summaryFormat**  
> Type: String   
> Default: null       
> 행/컬럼 그룹 요약 라벨에 표시할 포맷 형식  
> Example: "${label} 요약"

> **mustValues**
> Type: Array
> Default: null  
> 행/컬럼에서 원본 데이터에 없어도 반드시 라벨로 표시되어야 할 값의 목록  

> **sortDir**
> Type: SortDirection
> Default: SortDirection.NONE
> 필드의 기본 정렬 방식을 지정

> **expression**  
> Type: ValueType   
> Default: null       
> 값의 표현 방식 설정  

> **numberFormat**  
> Type: String   
> Default: "#0"       
> 숫자 값의 포맷 설정    

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


