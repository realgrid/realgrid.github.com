---
layout: post
title: Released RealGrid Flash 1.1.6
date: 2014-05-17 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.6
---

1. GridView 아이템의 상태를 알수 있는 GridBase.**getItemState(itemIndex)** 함수 추가. 상태는 ItemState.NORMAL, FOCUSED, UPDATING, INSERTING, APPENDING 중 하나.
2. DropDown 편집기 리스트 항목의 정렬 순서를 지정하는 DropDownCellEditor.**itemSortStyle** 속성 추가. ItemSortStyle.NONE, ASCENDING, DESCENDING 중 설정 가능, 기본값은 NONE.
3. setLookup 호출 시 **ordered** 옵션을 true로 지정하면 넣은 순서대로 dropDown 리스트에 표시된다. (itemSortStyle이 NONE인 경우)
4. LookupSource 내에 조건에 해당하는 값이 이미 존재하는지 확인할 수 있는 GridBase.**existsLookupData(sourceId, keys)** 함수 추가 [Lookup Tree](http://demo.realgrid.com/CellComponent/LookupTree/) 페이지 참조.
5. Excel 내보내기 시 엑셀 저장 확인 대화상자 표시 옵션 ExportOptions.**showConfirm** 추가. 기본값은 true. GridBase.**exportGrid** 함수를 Javascript에서 직접 호출하는 경우에는 Flash 보안 문제로 반드시 확인 대화 상자를 먼저 표시해야 함(showConfirm=true). [Excel Overview](http://demo.realgrid.com/Demo/ExcelOverview) 페이지 참조. 대화상자를 피하고자 한다면 [Context Menu](http://demo.realgrid.com/GridComponent/ContextMenu)를 이용할 수 있음.
6. 컬럼이 readOnly이거나 editable이 아닐 경우 편집기 비활성화 상태에서 클립보드 붙여넣기가 안되도록 수정
7. number 필드 셀에 NaN으로 표시하지 않도록 하는 옵션 추가
8. Column.**textInputCase** 속성 추가. 붙여넣기일 때는 컬럼의 설정을 따름. CellEditor.textCase가 DEFAULT이면 Column의 textInputCase 값을 따름. (기본이 DEFAULT)
9. 데이터가 clear될 때 CheckBar 헤더의 체크를 해제하도록 수정
10. 데이터가 clear될 때 Column 헤더의 current 표시를 해제하도록 수정
11. wmode=opaque인 경우 한글 IME 상태에서 readOnly 컬럼에서 입력시 다른 Element에 표기되는 오류 수정
12. Selection Style이 SINGLE_ROW일때 선택한 Cell을 다시 클릭하면 Selection이 사라지는 오류 수정
13. TreeGrid 편집중에 Tree 표시가 깨지는 오류 수정
14. LookupTree에서 조건에 해당하는 도메인이 존재하지 않을때 발생하는 오류 수정
15. 리턴값이나 callback 매개변수로 backslash(\)가 전달되는 경우 발생하는 오류 수정
16. readOnly가 true이거나 editable이 false인 컬럼셀에서 `Ctrl+C` 복사하기가 안되는 오류 수정.



