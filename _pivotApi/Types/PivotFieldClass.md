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
> Type: [DateValueType](/pivotApi/types/DateValueType/)    
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
> Example: {1: "상반기", 2: "하반기"}  

> **displayFormat**  
> Type: String   
> Default: null       
> 행/컬럼 라벨에 필드 값을 표시할 포맷 형식    
> Example: "${value} 월"

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
> Type: [SortDirection](/pivotApi/types/SortDirection/)  
> Default: SortDirection.NONE  
> 필드의 기본 정렬 방식을 지정  

> **expression**  
> Type: [ValueType](/pivotApi/types/ValueType/)  
> Default: null       
> 값의 표현 방식 설정  

> **numberFormat**  
> Type: String   
> Default: "#0"       
> 숫자 값의 포맷 설정  
> 자릿수 필수 표시 여부는 0, 값이 있는 경우에만 표시는 #을 사용한다.   
> ex) #,##0.000  //천단위 ,를 표시하고 고정소수점 3자리를 사용   

> **prefix**  
> Type: String   
> Default: null       
> value 앞에 추가로 표시할 내용  

> **suffix**  
> Type: String   
> Default: null       
> value 뒤에 추가로 표시할 내용    

<a name="sortCallback"></a>
> **sortCallback**  
> Type: function(a,b)   
> Default: null       
> 표시되는 필드의 순서를 임의로 지정하고자 할때 사용한다.  
> 1.0.2 버전부터 지원한다.  

<a name="valueAlignment"></a>
> **valueAlignment**  
> Type: [ValueAlignmentType](/pivotApi/types/ValueAlignment/)   
> Default: ValueAlignmentType.CENTER       
> 셀안에 표시되는 데이터의 위치를 지정한다.       
> 1.0.3 버전부터 지원한다.  

<a name="labelPrefix"></a>
> **labelPrefix**  
> Type: String   
> Default: null       
> 라벨의 value 앞에 추가로 표시할 내용  
> 1.0.3 버전부터 지원한다. 

<a name="labelSuffix"></a>
> **labelSuffix**  
> Type: String   
> Default: null       
> 라벨의 value 뒤에 추가로 표시할 내용    
> 1.0.3 버전부터 지원한다. 

<a name="summaryPrefix"></a>
> **summaryPrefix**  
> Type: String   
> Default: null       
> 라벨의 요약 앞에 추가로 표시할 내용  
> 1.0.3 버전부터 지원한다. 

<a name="summarySuffix"></a>
> **summarySuffix**  
> Type: String   
> Default: null       
> 라벨의 요약 뒤에 추가로 표시할 내용    
> 1.0.3 버전부터 지원한다.

<a name="dateFormat"></a>
> **dateFormat**  
> Type: String   
> Default: null       
> date type이 custom일때 적용되는 날짜 포맷이다.  
> 형식은 리얼그리드의 datetime Format과 동일하다. 
> ex) "yyyy-MM-dd", "yyyyMMDD"  

<a name="emptyValue"></a>
> **emptyValue**  
> Type: String  
> Defalut: null  
> expression이 "distinct" 일때 값이 없는 경우 표시되는 text  
> 1.0.9 버전부터 지원한다.  

<a name="labelType"></a>  
> **labelType**  
> Type: [LabelType](/pivotApi/types/LabelType/)  
> Defalut: "both"  
> 해당 필드를 행 필드나 컬럼 필드로만, 아니면 둘다 적용가능한지의 타입을 지정한다.    
> 1.0.9 버전부터 지원한다.  


#### Examples   

<pre class="prettyprint">
    var quarters = [2, 1, 4, 3];
    function quarterSortFunction(a, b) {
        var aidx = quarters.indexOf(a.value);
        var bidx = quarters.indexOf(b.value);
        return aidx > bidx ? 1 : aidx < bidx ? -1 : 0;
    }

	pivot.setFieldMapping([{
	    name: "OrderID",
	    sourceField: "OrderID",
	    fieldHeader: "주문ID",
	    valueEnable: false,
		labelType: "row"   //해당 필드는 행으로만 설정가능하다.   
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
	    valueEnable: false,
		labelType: "column"  //해당 필드는 컬럼으로만 설정가능하다.  
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
	    valueEnable: false,
	    sortCallback: quarterSortFunction
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
	    labelEnable: false,
	    valueAlignment: "far"   
	}]);	
</pre>

---

#### API Links

* [LabelType](/pivotApi/types/LabelType/)   
