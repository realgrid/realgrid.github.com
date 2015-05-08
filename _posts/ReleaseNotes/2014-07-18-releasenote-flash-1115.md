---
layout: post
title: Released RealGrid Flash 1.1.15
date: 2014-07-18 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.15
---


1. TreeDataProvider 관련 함수들 공개. TreeView 편집 기능 소개. [TreeView Editing](http://demo.realgrid.com/Demo/TreeEditing) 페이지 참조.
2. 컬럼 필터 관련 함수들 공개. [Column Filtering](http://demo.realgrid.com/Demo/ColumnFiltering) 페이지 참조.
3. Editor 폰트 설정 가능. 그리드 editOptions의 **fontName**, **fontSize** 속성 추가. 각 컬럼의 editor 설정에도 동일 속성 추가. 컬럼 editor 속성이 우선.
4. onCellCommit(), onEditRowChanged() 이벤트 추가. [Editors](http://demo.realgrid.com/Demo/Editors) 페이지의 더보기 내용 반드시 참조.
5. 컬럼 및 행 동적스타일에 **count** 변수 추가. 트리에서 자식 행의 개수를 리턴. [Set Array DataSet](http://demo.realgrid.com/Demo/TreeSetArrayData) 페이지 참조.
6. 컬럼에 지정된 필터들 중 acitve 된 것이 없는 경우 필터 핸들 내부를 비운 상태로 표시.
7. FilteringOptions의 **handleVisibility** 속성으로 헤더셀이 hovering 됐을 때만 핸들이 표시되도록 할 수 있음.
8. DisplayOptions에 maxHeight 속성 추가.
9. checkBar 에 **visibleOnly** 속성 추가. rowgrouping 상태이거나 treeView 일 때 checkBar의 all 부분을 클릭하면 표시된 행들에 대해서만 적용할 지 여부를 지정. 기본값은 false.
10. Datetime 필드가 포함된 inclusive 정렬 문제 개선.
11. TreeView의 getAncestors, getDescendants 함수 미동작 개선.
12. CheckBar가 exclusive일 때 감춰진 행의 checked 가 해제되지 않는 문제 개선.
13. 한 행이 그리드 전체 높이보다 높아진 상태에서 행 이동할 수 문제 개선.
14. Item checked와 관련된 함수들을 GridView와 TreeView에서 GridBase로 이동.
15. getCheckedRows()가 숨겨진 행의 상태를 못 가져오는 문제 개선.
16. checkAll()이 숨겨진 행에 적용되지 않는 문제 개선.
17. 하나의 cell만 선택된 경우 사용자 삭제 시 onRowsDeleting event 발생 시점과 매개변수 문제 개선.
18. 고정 컬럼에서 필터 리스트 표시 위치 문제 개선.
19. LocalDataProvider가 softdeleting이고 deleteCreated 일때 상태가 RowState.CREATED 인 복수행 삭제시, rowEvents가 false일 때도 개별 삭제 이벤트 발생하는 문제 개선.
20. 아이템 모델 함수들 공개. [Item Model Api](http://demo.realgrid.com/Demo/ItemModelApi) 페이지 참조.
21. Row Grouping 관련 함수들 추가. [Row Grouping Api](http://demo.realgrid.com/Demo/RowGroupingApi) 페이지 참조.
22. DataProvider에 개별 삭제 이벤트 추가. removeRow()가 호출되거나, removeRows()의 rowEvents가 true로 호출되면 onRowsDeleted 대신 onRowDelete 이벤트 발생.
23. 그리드의 setCellStyles로 DataCellStyle 적용시, 컬럼 스타일이나 동적 스타일로 적용한 값들이 초기화되는 문제 개선.
24. GridBase.setGroupingOptions({enabled:false}) 가 적용되지 않는 문제 개선.
25. footer.text, footer.expression 모두 설정 안된 경우 footer 셀에 아무것도 표시되지 않도록 함. footer.groupText, footer.groupExpression 모두 설정 안된 경우 그룹 footer 셀에 아무것도 표시되지 않도록 함.
26. Row count가 0일 때 footer에 아무것도 표시되지 않도록 개선.
27. DataProvider.setFields() 호출 시 기존 데이터가 남아 있는 문제 개선. loadData()나 setRows() 등 DataProvider에 **데이터를 추가하기 전에 반드시 setFields()로 필드가 구성돼야 함.**
28. TreeDataProvider.clearRowStates() 오류 개선.
29. Boolean 필드에도 undefined값은 undefined로 저장. 셀에디터의 **emptyValue** 속성에 빈문자열이 입력될 때 저장될 Boolean값을 지정 가능. <span style="color:blue">지정하지 않으면 undefined로 저장.</span>. 또한, 스타일의 **booleanFormat** 속성에 지정할 포맷의 세번째 마디에 undefined일 경우 표시될 문자열을 지정할 수 있음. 지정하지 않으면 빈문자열로 표시. [Data Type](http://demo.realgrid.com/Demo/DataType) 페이지와 [Boolean Field](http://demo.realgrid.com/Demo/BooleanField) 페이지를 참조.

