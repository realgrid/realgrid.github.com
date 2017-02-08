---
layout: apipost
title: SummaryMode
part: Types
typename: Constants
order: SummaryMode
objectname: 
directiontype: 
permalink: /api/types/SummaryMode/
tags:
    - 합계계산방법
    - 합계방식
    - 푸터풋터
---


#### Description

 Grid 각 컬럼의 합계를 계산하는 방식을 지정하는 상수다.  
이 상수 값에 따라 그리드는 각 컬럼의 총 합계나 행 그룹핑된 그룹의 합계를 자동으로 계산한다.
`statistical`로 지정되면 좀 더 많은 계산 시간을 요구한다.  

#### Members

> **NONE**  
> Value: "none"  
> 컬럼의 합계를 계산하지 않는다.  

> **AGGREGATE**  
> Value: "aggregate"  
> 합, 평균, 최대값, 최소값 등 산술적인 합계를 자동으로 계산한다.  

> **STATISTICAL**  
> Value: "statistical"  
> 분산, 표준 편차 등 통계적 합계를 자동으로 계산한다.  

---

#### Demo Links

* [Column Footer Demo](http://demo.realgrid.com/HeaderAndFooter/ColumnFooter/)  
* [Row Grouping Demo](http://demo.realgrid.com/RowGroup/RowGrouping/)
