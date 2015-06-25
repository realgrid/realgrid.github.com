---
layout: post
title: Released RealGridJS 1.0.4
date: 2015-06-13 19:28:03 +9:00 GMT
category: "Release Notes"
product: js
version: 1.0.4
---

1. SearchCellEditor에 useCtrlEnterKey, useEnterKey 속성 추가, searchLength, searchDelay와 관계없이 Enter, Ctrl+Enter 키 입력으로 즉시 onEditSearch이벤트 발생 (단 useEnterKey는 목록이 비어 있는 경우만 동작)
2. CellEditor의 EditButton(DropDown, Date)과 Button의 표시 방법을 결정하는 buttonVisibility, editButtonVisibility 속성 추가. "always"는 항상 표시, "default"는 hovering, focused상태에서 표시, visible은 focused상태만 표시, "hidden"은 표시하지 않음 (기본값은 "default")
3. GridBase.onGetEditValue 이벤트 추가. editResult에 편집기에서 입력한 text, value값이 포함, value를 변경하면 해당 값으로 cell commit.
4. DataProvider.getOutputRows(options, startRow, endRow) 함수 추가. options는 datetimeFormat, booleanFormat, datetimeCallback, booleanCallback 으로 구성. boolean이나 datetime을 format문자열 혹은 callback함수를 통해 다른 형태로 변형이 가능.
5. Footer expression에서 다른 field의 합계를 가져오는 sum[fieldName] 수식 추가.
6. 셀단위 검색 함수인 searchCell(options) 함수 추가. options에 fields, value, startItemIndex, wrap, select 속성으로 구성. CellIndex 반환
7. PasteOptions.checkReadOnly 속성 추가. true면 readOnly이거나 editable이 false인 Column은 paste대상에서 제외.
8. DataProvider에서 데이터가 변경될 때 발생하는 DataProvider.onDataChanged 이벤트 추가
9. DataColumn에 컬럼로 커서를 지정할 수 있는 cursor 속성 추가. cursor에 지정할 수 있는 값은 W3C 표준 준수(http://www.w3.org/wiki/CSS/Properties/cursor), uri 미지원
10. FixedOptions.ignoreDynamicStyles가 적용되지 않는 문제 해결.
11. Column Footer에서 expression이 없고 groupExpression만 있는 경우 groupExpression이 동작하지 않는 오류 개선.
12. Mobile에서 Cell을 Tab, Double Tab시 각각 onDataCellClicked, onDataCellDblClicked 이벤트 발생하도록 개선
13. Mobile에서 Long Tab, Double Tab시 Alert되는 문제 해결
14. onShowEditor에서 false를 return했을 때 editor가 비정상적인 위치에 표시되는 문제 해결.
15. 수식에서 not연산이 동작 하지 않는 문제 해결.
16. GridBase.hideEditor(), GridBase.cancelEditor() 추가
17. Mobile에서 setColumnProperty로 editable 변경 시 오류 발생하는 문제 해결.
18. DynamicStyles에서 styles를 문자열로 지정시 오류 발생하는 문제 해결.
19. LocalDataProvider.onRowStatesCleared 누락되어 있는 문제 해결.
20. RowGrouping상태에서 collapseGroup호출시 recursive가 true이면 오류 발생하는 문제 해결.
21. Footer에 의해 일부 가려진 RowGroupHeader에서 hovering시 잘못 표시되는 문제 해결.
22. Series컬럼등 DataColumn이 아닌 경우 dynamicStyles나 cellDynamicStyles가 적용안되는 문제 개선
23. CheckBar cell클릭시 해당 Cell이 완전히 보여지지 않는 문제 해결.

