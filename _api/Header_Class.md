---
layout: apipost
title: Header
part: Types
objectname: 
directiontype: 
permalink: /api/types/Header/
---


> 헤더 영역과 관련된 설정 모델이다. 헤더는 컬럼 및 컬럼그룹들의 헤더와 Indicator, StateBar, CheckBar 등의 Head 영역들로 구성된다.

#### Properties

> *height*
> Type: number
> Default: 0
> 헤더의 높이를 픽셀 단위로 지정한다. 0이면 자동으로 계산된다. 0보다 큰 값이면 이 값과 minHeight에 지정한 값 중 큰 값으로 지정된다.

> *minHeight*
> Type: number
> Default: 23
> 헤더의 최소 높이를 지정한다.

> *resizable*
> Type: boolean 
> Default: false
> 사용자가 헤더 왼쪽 셀의 아래쪽을 마우스 드래깅해서 헤더의 높이를 변경하게 할 수 있도록 할 것인 지를 지정한다.

> *visible*
> Type: boolean 
> Default: true   
> true면 Header를 표시한다.

> *filterable*
> Type: boolean 
> Default: true   
> 필터링 가능 여부를 지정한다.

> *sortable*
> Type: boolean 
> Default: true   
> 소트 가능여부를 지정한다.

