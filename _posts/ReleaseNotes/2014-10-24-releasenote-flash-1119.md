---
layout: post
title: Released RealGrid Flash 1.1.19
date: 2014-10-24 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.19
---


1. **GridExportOptions.lookupDisplay**를 추가, 이 값이 true일 때 dropDown 에디터나 labelField를 사용한경우 표시된 값을 엑셀로 저장
2. selection을 script로 제어하도록 **GridBase.clearSelection()**, **GridBase.setSelection()** 추가.
3. **CopyOptions.enabled**를 추가, enabled가 false이면 에디터가 아닌 상태에서의 복사가 불가능(기본값은 true).
4. 하나이상의 셀을 붙여넣을 때 발생하는 **GridView.onEditRowPasted** 이벤트 추가.
5. 현재 보여지는 컬럼및 그룹 배치 정보를 반환하는 **GridBase.getDisplayColumns()** 함수 추가.
6. **GridBase.setColumnLayout**함수에 Column Group과 그에 포함된 Column을 지정할 수 있도록 개선.
7. ColumnGroup의 hideChildHeaders가 true일 때 엑셀 Export 오작동 문제 개선
8. 엑셀 Export시 일부 datetime Field의 날짜가 1 감소하여 엑셀로 저장되는 오류 해결
9. checkable이 false일 때 checkAll버튼 클릭시 check되는 문제 개선.
10. checkableExpression을 지정했을 때 setValue에 의해 값이 바뀔 경우 checkable이 갱신되지 않는 문제 개선
11. fixedRows가 1이상이고 Row Grouping한 상태에서 checkAll클릭시 fixed행들이 check되지 않는 문제 개선
12. 편집중인 행에서 하나 이상의 컬럼에 붙여넣기할 때 client is editing 에러가 발생하는 문제 해결
13. TreeView에서 editing중인 행을 getValues로 가져오면 에러 발생하는 문제 해결
14. **TreeView.getEditingItem**을 호출했을때 반환되는 값에 values가 포함되지 않는 현상 개선
15. TreeView.setValues가 작동하지 않는 문제 개선.
16. GridBase.setColumn을 호출하여 visible을 변경했을때 에러 발생하는 문제 해결
17. GridBase.getColumnProperty에서 footer값을 가져왔을 때 에러 발생하는 문제 해결
18. **TreeDataProvider에서 savePoint** 호출 시 화면상에 데이터가 추가로 표시되는 문제 개선
19. **GridView.setCellStyle**을 호출했을때 화면이 refresh 되지 않는 문제 개선
20. SelectionStyle이 rows이고 onCurrentChanging에서 false를 반환했을 때 focus를 이동하면 focus는 그대로 있으나 selection만 이동하는 문제 개선

