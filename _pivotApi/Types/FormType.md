---
layout: apipost
title: FormType
part: Types
typename: Constants
order: FormType
objectname: 
directiontype: 
permalink: /pivotApi/types/FormType/
tags:
  - 폼타입
  - formtype
---

#### Description

피벗 그리드의 형태  
1.0.2 버전부터 지원한다.  

#### Members

> **NORMAL**   
> Value: "normal"   
> 일반적인 피벗형태       

> **GRID**  
> Value: "grid"   
> 그리드 형태       


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

