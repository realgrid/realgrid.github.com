---
layout: post
title: Released RealGrid+ 1.1.21.2542
date: 2014-12-02 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.21.2542
---

1. search Editor 추가. 이와 관련 **onEditSearch**콜백과 **fillEditSearchItems** 함수 추가. [Editors](http://demo.realgrid.com/Demo/Editors) 페이지를 참조.
2. 외부의 Mouse Wheel 이벤트를 전달하는 **RealGrids.setExternalWheelEvents** 함수 추가.  
     [External Wheel](http://demo.realgrid.com/Demo/ExternalWheel) 페이지를 참조.
3. **expandAll**에서 특정 level까지만 확장이 가능한 **level**매개변수 추가, level이 1이상이면 해당 레벨의 자식까지 확장.
4. ShapeCellRenderer에서 figureName에 "star" 추가, iconLocation을 "center"로 지정 할 수 있도록 개선.
5. checkBar의 all영역의 check를 api로 설정하는 **setAllCheck**함수와 check를 확인할 수 있는 **isAllChecked**함수 추가.
6. Shift키나 Ctrl키를 눌렀을 때 Scroll이 현재 Focus셀 위치로 이동하는 현상을 이동하지 않도록 수정.
7. dataType이 "text"인 컬럼에서 date editor를 사용할 때, Cell 값을 지우면 원래대로 돌아가는 현상을 undefined로 유지하도록 수정.
8. checkAll 함수 실행할 때 checked = false, checkableOnly = true일 때 checkable이 false인 행도 check가 해제되는 문제 해결.
9. **GridExportOptions.lookupDisplay**가 true일 때 감춰진 행의 label이 출력되지 않는 문제 해결.
10. **CheckBarOptions.exclusive**가 true일 때 편집중인 행을 check후 다른 행 check시 편집중인 행의 check가 해제되지 않는 문제 해결.
11. Filter, Validation, Style등의 Expression에서 끝에 공백이 존재하면 다른 속성의 수식이 잘못되는 문제 해결.
12. ShapeCellRenderer에서 값이 없는(undefined) 셀이 Scroll후 오기되는 문제 해결.
13. **setColumnFilters**나 **orderBy**호출 시 컬럼 헤더에 Icon과 Text가 겹쳐서 표시되는 현상 수정.
14. column.**getColumnProperty**, **setColumnProperty**에서 prop가 "popupMenu"일 때 오류 해결.