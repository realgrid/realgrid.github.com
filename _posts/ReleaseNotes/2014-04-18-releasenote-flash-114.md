---
layout: post
title: Released RealGrid Flash 1.1.4
date: 2014-04-18 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.4
---

1. DataProvider.**clearRowStates(deleteRows, rowEvents)**의 **rowEvents** 기본값을 **false**로 변경. 즉, 매개변수를 지정하지 않고 호출하면 데이터행별 상태 변경 이벤트(onRowStateChanged)가 발생하지 않는다.
2. DataProvider.**setRowState(row, state)**의 **state** 값을 잘못 입력하면 RowState.NONE으로 설정하지 않고 무시하는 것으로 변경.  
     DataProvider에 setRowStates() 추가.
3. 여러 행의 상태를 강제로 변경하는 DataProvider.**setRowStates** 추가.
4. 여러 행을 추가/수정하는 LocalDataProvider 메쏘드들의 마지막 매개변수 rowEvents 추가. true로 지정하면 행별로 이벤트 발생.
5. 특정한 시점에 보관한 DataProvder의 데이터 셋으로 복원하는 기능 추가. [Data Rollback](http://demo.realgrid.com/DataManager/DataRollback/) 페이지 참조.
6. GridView.setColumns()로 처음 설정한 컬럼 셋을 다른 형태로 배치하는 기능 추가. [Column Layout](http://demo.realgrid.com/Columns/ColumnLayout/) 페이지 참조.
7. TreeNode 에 CheckBox 추가. [Set Json Array](http://demo.realgrid.com/Demo/TreeSetJsonData) 참조.
8. DataProvider.**getStateRows(state)**에서 state에 **RowState.NONE**을 지정할 수 있도록 함. 또, **clearRowStates**, **setRowState** 함수 추가. [Row State](http://demo.realgrid.com/Editing/RowStates/) 페이지 참조.
9. 지정하지 않거나 undefined로 지정한 필드값은 변경하지 않는 LocalDataProvider.**updateStrictRow**, **updateStrictRows** 함수 추가. [데이터행 추가](http://demo.realgrid.com/Demo/AddDataRow) 페이지 Strict Update 참조.
10. GridView에 **checkAll**, **checkItem**, **checkRow**, **isCheckedItem**, **isCheckedRow** 등 CheckBar 관련 함수들 추가. [CheckBar](http://demo.realgrid.com/GridComponent/CheckBar/) 페이지 참조. **checkItem**는 exclusive 매개변수를 true로 지정해서 한 행만 checked 되도록 할 수 있다.
11. 그리드 checkBar.**exclusive** 속성을 true로 지정하면 사용자가 마우스로 클릭한 행만 배타적으로 checked 된다.
12. LocalDataProvider에 **moveRow** 메쏘드 추가. [데이터행 추가](http://demo.realgrid.com/Demo/AddDataRow) 페이지 참조.
13. 대량의 행을 추가/수정할 때 행별 이벤트가 발생하지 않도록 하는 DataProvider.**beginUpdate()**, **endUpdate()** 메쏘드 추가. [여러 데이터 행 추가하기](http://demo.realgrid.com/Demo/AddMultiRows) 페이지 참조.
14. SelectionStyle에 행 하나, 컬럼 하나를 선택할 수 있는 **singleRow**, **singleColumn** 옵션 추가. [Selecting](http://demo.realgrid.com/GridComponent/Selecting/) 페이지 참조.
15. 사용자 입력으로 편집기 내용이 변경될 때 **onEditChange** 이벤트 발생. [Editors](http://demo.realgrid.com/Editing/Editors/) 페이지 참조.
16. Expression에 **is defined**, **is not defined**, **is empty**, **is not empty** 연산자 추가.
17. Expression에서 null이나 undefined값의 **len**, **lenb** 연산값이 0이 되도록 개선.
18. 편집기가 표시되지 않은 상태에서 Copy & Paste 가능.
19. date editor에서 **yearNavigation** 속성을 true로 주면 년도 이동 가능.
20. date editor에서 **textReadOnly** 속성을 true로 주면 키보드로 입력 안되고 달력에서만 선택하도록 가능.
21. GridView의 **beginInsertRow()**, **beginAppendRow()**, **beginUpdateRow()** 함수를 이용해서 그리드를 행 삽입/추가/수정 상태로 진입 가능. (  
     또한, GridBase의 **showEditor()** 함수를 이용하면 현재 포커스가 있는 셀에 편집기 표시. [데이터행 추가](http://demo.realgrid.com/Demo/AddDataRow) 페이지 참조.
22. GridView의 **setColumnProperty** 함수 추가, 단순 속성 변경시 **setColumnProperty** 사용
23. insertRows, addRows, updateRows 에서 추가/변경된 행들의 상태가 변경되지 않는 버그 개선.
24. 스크롤바 버튼 클릭 시 data click 이벤트 발생하는 문제 개선.
25. 이전 편집 중 설정됐던 컬럼 validation 에러 아이콘이 해당 다음 편집 행의 컬럼 셀에 남아 있는 문제 개선.
26. 첫번째 행 편집 시 기존 편집 내용이 편집기에 따라붙는 현상 개선.
27. 데이터셀에 역슬래시('\')가 포함된 경우 그리드의 **getRowData()** 에러 개선.
28. fixedOptions.colCount가 0보다 클 때 트리뷰의 expander 파트가 표시되지 않는 문제 개선.
