---
layout: apipost
title: FilteringOptions
part: Types
objectname: 
directiontype: 
permalink: /api/types/FilteringOptions/
---


> 컬럼 필터링과 관련된 설정 모델이다.

#### Properties

> **enabled**
> Type: boolean
> Default: true
> 사용자가 필터 핸들이나 Indicator Head를 클릭해서 필터 상자를 표시할 수 있도록 할 것인지를 지정한다.

> **HandleVisibility**
> Type: [HandleVisibility](/api/types/)
> Default: HandleVisibility.VISIBLE
> 필터 핸들의 표시 방법을 지정한다.

> **toast**
> Type: [ToastOptions\|ToastOptions](/api/types/)
> 
> 대량 데이터셋의 정렬/필터링/그룹핑시 화면이 멈춰있는 상태일때 진행중임을 알려주는 Toast View 표시여부와 메세지를 지정한다.

> **selector**
> Type: [FilterSelectorOptions\|FilterSelector](/api/types/)
> 필터 선택상자 설정 모델이다.



#### See Also
> "ColumnFiltering":http://demo.realgrid.net/Demo/ColumnFiltering
