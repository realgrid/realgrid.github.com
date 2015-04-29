---
layout: apipost
title: CellButton
part: Types
objectname: 
directiontype: 
permalink: /api/types/CellButton/
---


> 데이터셀의 우측에 어떤 종류의 버튼을 표시할 지를 지정하는 상수다.

#### Members

> *NONE*
> Value: "none"
> 버튼을 표시하지 않는다.

> *ACTION*
> Value: "action"
> 사용자가 마우스 클릭할 수 있는 버튼을 표시한다.

> *POPUP*
> Value: "popup"
> 사용자가 마우스 클릭 시 팝업 메뉴가 실행되는 버튼을 표시한다.

#### Description

> ACTION의 경우 버튼 클릭시 [onCellButtonClicked](/api/types/) Callback 함수가 호출된다.
> 
> POPUP의 경우 컬럼에 popupMenu 속성 값이 정의 되어야 하고 ([DataColumn](/api/types/) 참조)
> 이 popupMenu 값과 [addPopupMenu](/api/types/) 호출시 name 값과 일치 해야 한다.
> 팝업 메뉴의 메뉴 항목 클릭시 [onMenuItemClicked](/api/types/) Callback 함수가 호출된다.

#### See Also
> 
> "Edit Button Demo":http://demo.realgrid.net/Demo/EditButtons 참조

