---
layout: apipost
title: SparkColumnRenderer
part: Types
typename: Cell Renderers
order: SparkColumnRenderer
objectname: 
directiontype: 
permalink: /api/types/SparkColumnRenderer/
tags:
    - 스파크컬럼랜더러
    - series
    - 시리즈
---


#### Description

 기간 등 일정 범위 내의 데이터 흐름을 간략하고 직관적으로 표시하는 데 사용될 수 있다.

#### Properties

> **baseValue**  
> Type: Number  
> Default: null  
> 기준값을 지정한다.   

> **highFill**  
> Type: String  
> Default: null  
> Fill 타입의 속성값. 그려지는 스파크 컬럼 값중 가장 큰 값에 적용된다.

> **lowFill**  
> Type: String  
> Default:  
> Fill 타입의 속성값. 그려지는 스파크 컬럼 값중 가장 작은 값에 적용된다.

> **belowFill**  
> Type: String  
> Default: null  
> Fill 타입의 속성값. baseValue에서 지정한 값보다 작은 값들에게 적용된다.

> **barWidth**  
> Type: Number  
> Default: 0.8  
> 하나의 스파크 컬럼 막대그래프가 차지하는 비율. 최대 1을 넘지 않는다.  
> ex) 스파크 컬럼 막대그래프의 비율 = RealGrid.column.width / 그려지는 스파크 컬럼의 개수 ** barWidth

---

#### Demo Links

* [Spark Line Renderer](http://demo.realgrid.com/Series/SparkLineRenderer/
