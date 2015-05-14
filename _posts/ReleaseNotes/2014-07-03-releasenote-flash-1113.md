---
layout: post
title: Released RealGrid+ 1.1.13
date: 2014-07-03 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.13
---

1. 그리드가 처음 로드될 때, 첫번째 셀에 포커스가 가도록 개선. 이 후, 첫번째 셀로 포커스를 이동 시키고 싶은 경우 GridBase.**resetCurrent()** 호출.
2. 편집 중인 행에 대해 GridBase.getValues(itemIndex)를 호출하면 데이터 행이 아니라 편집 Item의 값들을 가져오도록 변경.
3. 그리드 body.**rowStylesFirst**를 true로 지정하면, body.dynamicStyles가 column.styles 보다 먼저 적용되도록 개선. [Dynamic Styles on Rows](http://demo.realgrid.com/Demo/DynamicStylesRow) 페이지 참조.
4. 그리드 getValue(field) 함수 field 인자에 필드명을 지정 가능.
5. [Icon 셀렌더러](http://demo.realgrid.com/Demo/IconCellRenderer)에서 텍스트를 표시하지 않도록 하는 옵션 추가. **iconLocation** 스타일 속성 값을 "center"로 하거나, 셀렌더러의 **textVisible**을 false로 지정하면 됨.
6. 컬럼그룹에 포함된 컬럼들도 병합 모드가 아닐 때는 row grouping 가능하도록 개선.
7. Column.footer.styles 외에 Column.footer.groupStyles 에 컬럼별 RowGroup footer의 스타일을 추가 지정할 수 있도록 함.
8. LocalDataProvider.setRowCount(newCount, fillFieldDefaults, defaultValues, rowState) 함수 관련 문제를 개선. fillFieldDefaults가 true면 각 필드의 default 값으로 채움. defaultValues가 배열이거나 json 객체이면 그 값으로 채움. rowState로 새로 생성될 행의 상태값 지정 가능. 기본값은 "none".  
     setRowCount()로 빈 행들을 생성하고, 바로 setValue()를 호출하면 값이 저장되지 않는 문제 개선. [Set RowCount](http://demo.realgrid.com/Demo/RowCount) 페이지를 확인하십시오.
9. 컬럼 헤더셀의 너비가 좁아질 때 Sorting, Filtering 핸들이 다른 헤더셀로 넘어가 표시하는 문제 개선.
10. DataProvider.removeRows에서 onRowStatesChanged 가 변경된 행이 없어도 발생하던 문제 개선.
11. DataProvider.updateRows나 updateStrictRows 후 onRowStatesChanged 이벤트 가 발생 안하던 문제 개선.
12. DataProvider.clearRowStates 호출 후 onRowStatesCleared 이벤트가 발생 안하던 문제 개선.
13. DataCell을 클릭할 때만 onDataCellDblClicked 이벤트가 발생하도록 개선.
14. 그리드 onCellEdited 이벤트 내에서 그리드 commit()을 호출하고 바로 스크롤하면, 데이터셀이 변경된 값을 표현하지 못하던 문제 개선.


