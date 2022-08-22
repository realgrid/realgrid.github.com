---
layout: apipost
title: LabelType
part: Types
typename: Constants
order: LabelType
objectname: 
directiontype: 
permalink: /pivotApi/types/LabelType/
versions:
  - 1.0.9+
tags:
  - 라벨타입
  - labeltype
---

#### Description

피벗 필드의 라벨의 타입이다.   

#### Members

> **COLUMN**   
> Value: "column"   
> 일반적인 피벗형태       

> **row**  
> Value: "row"   
> 그리드 형태       

> **both**  
> Value: "both"   
> 그리드 형태       

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
	    valueEnable: false,
		  labelType: "row"   //해당 필드는 행으로만 설정가능하다.   
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
	    valueEnable: false,
		  labelType: "column"  //해당 필드는 컬럼으로만 설정가능하다.  
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
	    sortCallback: quarterSortFunction,
		  labelType: "column"  //해당 필드는 컬럼으로만 설정가능하다.  
	}, {
	    name: "OrderMonth",
	    sourceField: "OrderDate",
	    dateType: "month",
	    fieldHeader: "영업월",
	    displayFormat: "${value}월",
	    summaryFormat: "${label} 합",
	    valueEnable: false,
		  labelType: "column"  //해당 필드는 컬럼으로만 설정가능하다. 
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

* [PivotField](/pivotApi/types/PivotField/)   
