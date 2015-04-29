---
layout: apipost
title: DateCellEditor
part: Types
objectname: 
directiontype: 
permalink: /api/types/DateCellEditor/
---


> Date picker를 표시해서 날짜를 선택한다.

#### Properties

> *textReadOnly*
> Type: boolean
> Default: false
> true인경우 키보드를 이용해서 날짜를 입력할수 없다.

> *yearNavigation*
> Type: boolean
> Default: false
> true이면 달력 팝업에 년도이동버튼이 표시된다

> *commitOnSelect*
> Type: boolean
> Default: true
> true이면 달력 팝업에서 날짜를 선택과 동시에 값이 반영되고 onCellEdited event가 발생한다.
> false이면 날짜를 선택시 grid에 날짜가 입력되고 dataProvider에는 Edit종료후 반영된다.

> *editFormat*
> Type: String
> Default: null
> 
