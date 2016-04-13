---
layout: apipost
title: FilteringOptions
part: Types
typename: Classes
order: FilteringOptions
objectname: 
directiontype: 
permalink: /api/types/FilteringOptions/
---

#### Description

> 컬럼 필터링과 관련된 설정 모델이다.

#### Properties

> **enabled**  
> Type: boolean  
> Default: true  
> 사용자가 필터 핸들이나 Indicator Head를 클릭해서 필터 상자를 표시할 수 있도록 할 것인지를 지정한다.  

> **HandleVisibility**  
> Type: [HandleVisibility](/api/types/HandleVisibility/)  
> Default: HandleVisibility.VISIBLE  
> 필터 핸들의 표시 방법을 지정한다.  

> **toast**  
> Type: [ToastOptions](/api/types/ToastOptions/)  
> 대량 데이터셋의 정렬/필터링/그룹핑시 화면이 멈춰있는 상태일때 진행중임을 알려주는 Toast View 표시여부와 메세지를 지정한다.  

> **selector**  
> Type: [FilterSelectorOptions](/api/types/FilterSelectorOptions/)  
> 필터 선택상자 설정 모델이다.  

> **handleBorderColor**
> Type: string  
> Default: undefined  
> 필터핸들의 경계선 색상을 지정한다. "#ff000000" 형태의 색상코드이다. 

> **handleColor**
> Type: string  
> Default: undefined  
> 핸들의 색상을 지정한다. "#ff000000" 형태의 색상코드이다.  

> **handleNoneColor**
> Type: string  
> Default: undefined  
> 필터링 되지 않았을때의 색상을 지정한다. "#ff000000" 형태의 색상코드이다.  

> **hoveredHandleColor**
> Type: string  
> Default: undefined  
> 마우스가 호버되고, 필터링되었을때의 색상을 지정한다. "#ff000000" 형태의 색상코드이다.  

> **hoveredHandleNoneColor**
> Type: string  
> Default: undefined  
> 마우스가 호버되고, 필터링 되지 않았을때의 색상을 지정한다. "#ff000000" 형태의 색상코드이다.  

> **imageHandle**
> Type: boolean  
> Default: false  
> 핸들 기호를 이미지로 표시할 것인지의 여부를 지정한다.  

> **handleImage**
> Type: object
> none, fill, hoveredNone, hoveredFill 의 속성을 가진 객체이다. 각 속성에는 해당 속성에 맞는 이미지의 경로를 지정한다.  

#### Demo Links

> [ColumnFiltering](http://demo.realgrid.net/Demo/ColumnFiltering)
