---
layout: post
title: Released RealGrid+ 1.1.18
date: 2014-10-08 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.18
---

1. **DisplayOptions.parentChangable**을 true로 지정하여 Drag and drop으로 이동하여 컬럼의 부모를 변경 가능. (단, 그룹내에 하나의 컬럼만 있는 경우 이동 불가) [Column Moving](http://demo.realgrid.com/Columns/ColumnMoving) 페이지를 참조.
2. 컬럼 필터의 expression에 다른 컬럼와의 비교를 위해 values 변수 추가. [Column Filtering](http://demo.realgrid.com/Columns/ColumnFiltering/) 페이지를 참조.
3. CheckBar의 행별 checkable 제어를 위해 **isCheckable**, **setCheckable**함수 추가. 수식에 의해 checkable을 제어하기 위해 **CheckBarOptions.checkableExpression** 속성과 **applyCheckables**, **setCheckableExpression**, **resetCheckables**함수 추가. [CheckBar](http://demo.realgrid.com/GridComponent/CheckBar/) 페이지를 참조.
4. csv 데이터의 필드 구분자를 지정할 수 있는 **DataLoadOptions.delimiter**속성 추가. ("|" "\t"등, 기본값은 ",")
5. **FilterOptions.selector.showAll**속성으로 컬럼 필터의 All Filter 표시여부를 결정하도록 개선.
6. **GridBase.addColumnFilters**함수의 **overwrite** 매개변수를 true로 주었을 때 기존 정의된 동일 이름의 filter가 재정의되지 않는 문제 해결
7. xml data load시 boolean field의 값이 없을때 기본 true로 불러왔던 문제 해결
8. saveExcel을 여러번 호출하면 Confirm Dialog가 여러번 뜨던 문제 해결. 현재 dialog가 떠 있는지 확인하기 위한 **isLocalExporting** 함수와 dialog를 강제로 가운데로 이동시키는 **centerLocalExporting**함수 추가.
9. **GridBase.commit**함수에서 성공여부를 반환하도록 수정.
10. **GridBase.getItemState**에서 focus 상태의 itemIndex로 호출해도 "normal"로 반환되는 문제를 정상적으로 "focused"를 반환하도록 개선.
11. TreeView에서 editOptions.enterToTab 이 true일 때 readOnly 컬럼에서 enter키 입력시 다음 셀로 이동하지 않는 문제 해결.
12. TreeView에서 options.summaryMode 가 statistical일 때 var등의 분산, 표준편차 값이 계산되지 않는 문제 해결.
13. DataProvider.onLoadCompleted, onLoadFailed callback이 발생하지 않는 문제 해결.


