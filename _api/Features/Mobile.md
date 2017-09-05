---
layout: apipost
title: Mobile
part: Features
objectname: 
directiontype: 
permalink: /api/features/Mobile/
tags:
  - mobile
  - 모바일
---


#### Description
Mobile Grid에서 각 각의 Gesture를 사용해서 편집, 버튼클릭, 행 그룹 등의 동작을 할 수 있다.   
Mobile Grid에서는 editable 속성의 Default는 false이다.  
모바일 편집 기능을 사용하기 위해서는 gridView.setEditOptions({editable:true}) 설정이 필요하다.


#### Gesture

> **Tap**: 화면을 짧게 터치합니다.  
> 선택: 데이터 셀을 선택합니다.  
> 정렬: 헤더 클릭 시 해당 컬럼을 정렬합니다.  
> 체크: checkBar영역의 체크박스를 체크합니다.  
> 버튼: 선택된 셀의 버튼을 Tap하면 버튼 기능이 실행됩니다.

> **Double tap**: 두 번의 빠른 동작으로 표면 터치  
> 편집: 해당 셀의 editor 를 보여준다.  

> **Drag**: 접촉없이 표면을 따라 움직입니다.  
> 스크롤: 데이터 셀 영역에서 Drag 시 스크롤 합니다.  
> rowGrouping: 헤더를 panel 방향으로 Drag 시 rowGrouping을 합니다.  

> **Long Tap**: 화면을 누르고 누르고 있습니다.  
> rowGroup해제: panel에서 누르고 있는 그룹을 해제합니다.  