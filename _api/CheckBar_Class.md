---
layout: apipost
title: CheckBar
part: Types
objectname: 
directiontype: 
permalink: /api/types/CheckBar/
---


> CheckBar와 관련된 설정 모델이다. CheckBar는 행들의 Check 상태를 표시하는 수직 Bar다. 

#### Properties

> *width*
> Type: number
> Default: 20
> CheckBar의 너비를 픽셀 단위로 지정한다. 최소 너비는 1 픽셀이다.

> *showAll*
> Type: boolean
> Default: true
> checkBar.head 에 "v" 표시 여부를 지정한다.

> *showGroup*
> Type: boolean
> Default: true
> 행 그룹핑시 그룹 헤더 영역에 체크박스 표시 여부를 지정한다.

> *visibleOnly*
> Type: boolean 
> Default: false   
> checkBar.head를 클릭하여 전체 선택시 보이는 행만 체크할 것인지의 여부를 지정한다.

> *checkableOnly*
> Type: boolean 
> Default: true   
> 체크 가능한 행만 체크할 수 있는지의 여부를 지정한다. (checkableExpression에서 체크 가능 여부를 지정할 수 있다.)

> *exclusive*
> Type: boolean 
> Default: false   
> 한 행만 체크 가능할지의 여부를 지정한다.

> *checkableExpression*
> Type: string
> Default: 
> 체크 가능 여부의 수식을 지정한다.

#### See Also
> "CheckBar":http://demo.realgrid.net/Demo/CheckBar
