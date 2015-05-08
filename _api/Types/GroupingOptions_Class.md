---
layout: apipost
title: GroupingOptions
part: Types
typename: Config Classes
order: GroupingOptions
objectname: 
directiontype: 
permalink: /api/types/GroupingOptions/
---


#### Description

> Row grouping은 데이터 행들을 하나 이상의 지정한 컬럼의 값을 기준으로 구분시켜 계층적인 구조로 표시한다.

#### Properties

> **enabled**    
> Type: boolean  
> Default: true  
> false로 하면 Row Grouping을 하지 않는다.  

> **prompt**  
> Type: String  
> Default: "컬럼 헤더를 이 곳으로 끌어다 놓으면 그 컬럼으로 그룹핑합니다."
> Panel에 표시될 메시지를 지정합니다.  

> **linear**  
> Type: boolean  
> Default: false  
> panel영역에 표시되는 column을 일렬로 배치한다.  

> **expandWhenGrouping**  
> Type: boolean  
> Default: true  
> 그룹핑시 그룹의 펼침 여부를 지정한다.  

> **toast**  
> Type: [ToastOptions](/api/types/ToastOptions)  
> 대량 데이터셋의 정렬/필터링/그룹핑시 화면이 멈춰있는 상태일때 진행중임을 알려주는 Toast View 표시여부와 메세지를 지정한다.

