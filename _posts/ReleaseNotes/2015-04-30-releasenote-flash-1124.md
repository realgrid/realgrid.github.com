---
layout: post
title: Released RealGrid Flash 1.1.24
date: 2015-04-16 01:01:01 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.24
---

1. dataRow가 변경되었을 때 이벤트가 발생하는 [GridBase.onCurrentRowChanged](/api/GridBase/onCurrentRowChanged/) 콜백 추가. (기존의 onCurrentChanged는 itemIndex변경시 발생)
2. 현재 Editor의 내용을 Cell에 반영하는 GridBase.commitEditor(hideEditor) 함수 추가. hideEditor매개변수가 true이면 editor를 종료.(기본값은 true)
3. Cell별로 Editor의 표시여부를 임의로 변경하기 위해서 [GridBase.onShowEditor](/api/GridBase/onShowEditor/) 콜백 추가, onShowEditor에서 false를 return하면 Editor가 표시하지 않음.
4. [SortingOptions](/api/types/SortingOptions/).keepFocusedRow 속성 추가. keepFocusedRow가 true이면 정렬시 선택된 행(dataRow)가 유지. [Column Sorting](http://demo.realgrid.com/Demo/ColumnSorting) 페이지를 참조.
5. Row Grouping기준컬럼이 변경되는 경우 발생하는 onGroupingChanged 콜백 및 isGrouped, isMergedGrouped, getGroupFields, getGroupFieldNames 함수 추가. [Row Grouping](http://demo.realgrid.com/Demo/RowGrouping) 페이지를 참조.
6. EditOptions.crossWhenExitLast 속성 추가, 이 값이 true이면 tab/enter 키로 마지막 셀을 벗어날 때 다음 행으로 이동  
     EditOptions.commitWhenExitLast 속성 추가, 이 값이 true이면 tab/enter 키로 마지막 셀을 벗어날 때 해당 행을 commit  
     [Editors](http://demo.realgrid.com/Demo/Editors) 페이지를 참조.
6. Provider초기값과 비교하여 동일한 값일때 상태를 복구하는 DataProvider.restoreMode 속성및 DataProvider.restoreUpdatedRows, restoreUpdatedStates 추가. restoreMode가 "none"이면 restore하지 않고, "auto"이면 값 변경시 자동으로, "explicit"이면 restoreUpdatedRows, restoreUpdatedStates함수 호출로 복구.
7. 빈문자열,null,undefined를 다른 값으로 인식할지를 결정하는 EditOptions.strictDiff, DataProvider.strictRestore 속성 추가 (기본값은 false)  
     strictDiff는 EditOptions.checkDiff가 true일 때 값 비교시, strictRestore는 restoreMode에 의해 복원시 사용.
8. readOnly가 true이거나 editable이 false인 경우 DropDown, Date Editor의 EditButton이 표시되지 않도록 개선.
9. DropDown, Date Editor의 EditButton이 DataCellStyle.readOnly를 변경시 적용되지 않는 문제 개선.
10. Date Field를 기준으로 Row Grouping시 같은 날짜가 따로 Grouping되는 문제 개선.
11. SelectionStyle이 "rows"거나 "columns"일 때 EditButton을 클릭하면 Selection이 사라지는 문제 개선.
12. ImageCellRenderer에서 url을 상대경로로 지정시 #1009에러 발생하는 문제 개선.
13. 컬럼이 editable false이고 checkCellRenderer.editable true일 때 클릭으로 check수정이 되지 않는 문제 개선.