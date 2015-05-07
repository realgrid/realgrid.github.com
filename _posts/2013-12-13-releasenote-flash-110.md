---
layout: post
title: Released RealGrid Flash 1.0.10
date: 2013-12-13 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.0.10
---

1. GridBase.isVisible(), [GridBase.setVisible()](/api/GridBase/setVisible/) 추가.
2. GridView.commit(force) 메쏘드 추가 - 현재 편집 중인 행의 data를 provider에 커밋한다. force가 true이면 실제 수정이 없어도 data provider에 commit한다.  
     GridView.cancel() 추가 - 편집 중인 행의 수정 내용을 무시하고 편집 상태를 종료한다.
3. DataColumn.editable, DataColumn.readOnly 속성 추가.  
     - **editable**: false면 데이터셀에 편집기를 표시하지 않는다. 기본값은 true. - **readOnly**: false면 편집기가 표시되는 경우 편집할 수 없다.
4. GridView.onDataCellClicked, GridView.onDataCellDblClicked 이벤트 추가.
5. DropDown cell 편집기 관련 버그 수정(첫 번째 항목 미선택).

