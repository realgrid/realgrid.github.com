---
layout: post
title: Released RealGrid Flash 1.1.23.2595
date: 2015-03-13 15:47:54 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.23.2595
---

1. EditOptions.forceInsert 속성 추가, 기본 값인 false 일 때 새로운 행을 insert하고 편집없이 다른 행으로 이동 시 편집 중인 행을 취소하도록 개선.  
     기존의 방법을 원하는 경우 forceInsert를 true로 설정하여 사용
2. 새로운 행을 append하고 편집없이 해당 행을 마우스 클릭하면 행이 취소되고, 편집 후 해당행을 클릭하면 commit되는 문제 개선.
3. Toast View를 표시하고 감추는 GridBase.showToast(message), GridBase.hideToast()함수 추가.
4. 현재 정렬 상태를 알 수 있는 GridBase.getSortedFields()함수와 onSortingChanged 콜백 추가.
5. 컬럼 Header에서 더블 클릭시 발생하는 GridBase.onColumnHeaderClick 콜백 추가.
6. LocalTreeDataProvider.getValue(), LocalTreeDataProvider.setValue() 추가.
7. TextCellRenderer.showTooltip 속성 추가.
8. DataColumn.requiredLevel, requiredMessage 추가, required 위반시 Error대신 ValidationError 발생하도록 개선.
9. Datetime field의 min, max, set속성 미동작 개선.
10. fitColumnWidth 함수 minValue및 visibleOnly 파라메터 추가, minValue는 최소 넓이, visibleOnly를 true로 하면 현재 보이는 데이터를 기준으로 fitting하도록 개선.
11. FixedOptions.rowResizable속성 추가, 한 행이 그리드 body 영역의 높이보다 크면 body 영역의 하단을 드래깅하여 높이 조정하도록 개선. 한 행이 그리드 body 영역의 높이보다 큰 경우, fixed bar나 그리드 bottom line이 표시되는 버그 개선.
12. DataProvider.datetimeFormat 에 시,분의 값에서 앞의 0을 생략가능한 한자리 패턴이 추가. [DataType](http://demo.realgrid.com/Demo/DataType) 페이지를 참조.
13. 컬럼에 prefix나 suffix를 지정했을 때 셀 값이 null이면 셀의 text에 "null"이 더해져서 표시되는 문제 개선.
14. setColumns 호출 시 컬럼의 alwaysShowEditButton 속성이 true이고 alwaysShowButton이 false일 때 표시되지 않는 문제 개선.
15. ColumnFilter에서 filter가 변경될 때 onFilteringChanged 콜백이 active된 filter수 만큼 발생되는 문제 개선.
16. Column styles의 prefix, suffix속성에 개행문자가 포함된 경우 셀 값이 null이거나 셀 값에 개행문자가 없으면 개행문자 전의 문자열만 표시되는 문제 개선.
17. Column의 equalBlank가 true인 컬럼을 Merged Row Grouping했을 때 에러 수정.
18. dropDown editor의 itemSortStyle이 none이 아닐 때 선택한 값이 실제와 다르게 저장되는 문제 개선.
19. setRowCount로 데이터가 없는 행을 만든 후 getFieldValues, getDistinctValues, getValues등에서 오류 발생하는 문제 개선.
20. 추가: 기존 EditOptions.updatable이 false일 때 Editor가 활성화 되지 않았던 것을 Editor가 활성화되고 Editor의 활성화 여부에 대한것은 editable속성으로만 전담하도록 변경.