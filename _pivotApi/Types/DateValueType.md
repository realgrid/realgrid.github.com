---
layout: apipost
title: DateValueType
part: Types
typename: Constants
order: DateValueType
objectname: 
directiontype: 
permalink: /pivotApi/types/DateValueType/
tags:
  - 날짜값타입
  - 날짜
---

#### Description

Date 필드를 피벗에 표현하는 방식

#### Members

> **YEAR**   
> Value: "year"  
> 년도     

> **HALF**  
> Value: "half"   
> 반기, [1,2]     

> **QUARTER**  
> Value: "quarter"    
> 분기, [1,2,3,4]    

> **MONTH**  
> Value: "month"    
> 월, [1-12]      

> **WEEKOFYEAR**  
> Value: "weekofyear"    
> 년 주차, [1-53]  
> 1월 1일을 기준으로 계산, ISO 8601표준과 다름    

> **WEEKOFMONTH**  
> Value: "weekofmonth"    
> 월 주차, [1-5] 
> 1일을 기준으로 계산    

> **WEEKDAY**  
> Value: "weekday"    
> 주, 일요일(1) - 토요일(7)    

> **DAY**  
> Value: "day"    
> 일, [1-31]    

> **HOUR**  
> Value: "hour"    
> 시간, [0-23]    

<a name="CUSTOM"></a>
> **CUSTOM**  
> Value: null   
> 리얼그리드의 datetime Format과 동일하다. 
> ex) "yyyy-MM-dd", "yyyyMMDD"     


#### Examples   

<pre class="prettyprint">
pivot.setFieldMapping([{
    name: "OrderYear",
    sourceField: "OrderDate",
    dateType: "year",
    fieldHeader: "영업년도",
    displayFormat: "${value}년도",
    summaryFormat: "${value}년도 요약",
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
    summaryFormat: "${label} 요약",
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
    summaryFormat: "${label} 요약",
    valueEnable: false
}, {
    name: "OrderMonth",
    sourceField: "OrderDate",
    dateType: "month",
    fieldHeader: "영업월",
    displayFormat: "${value}월",
    summaryFormat: "${label} 요약",
    valueEnable: false
}, {
    name: "WeekDay", 
    sourceField: "OrderDate",
    dateType: "weekday",
    fieldHeader: "영업요일",
    displayLabels: {
        1: "일",
        2: "월",
        3: "화",
        4: "수",
        5: "목",
        6: "금",
        7: "토"
    },
    mustValues: [1,2,3,4,5,6,7],
    valueEnable: false
}]);
</pre>

---

