---
layout: post
title: Released RealGrid Flash 1.1.17
date: 2014-09-12 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.17
---

1. Model정보 가져오는 함수들에 extended 매개변수 추가, extended가 true이면 level, childIndex등의 계층정보 추가 [Item Model API](http://demo.realgrid.com/Demo/ItemModelApi) 페이지 참조.
2. 컬럼 우측 경계 더블클릭하면 Column 크기를 Data에 맞추는 기능과 동일한 **fitColumnWidth** 함수 추가  
     column매개변수에 Column Group 또는 DataColumn에 해당하는 object나 name을 전달할 수 있습니다.
3. TreeDataProvider에 편집 관련 **addTreeDataRow**, **insertTreeDataRow**, **removeRows** 함수 추가
4. GridBase에 현재 Selection된 행을 알 수 있는 **getSelectedRows**, **getSelectedItems** 함수 추가
5. TreeView에서 자식 행의 건수를 가져오는 **getChildCount**와 모든 자손 행의 건수를 가져오는 **getDescendantCount** 함수 추가
6. GridBase.CheckBarOptions에 전체선택 여부 showAll, Group Row의 Check 여부 showGroup 옵션 추가, 기본은 true
7. TreeView에서 softDeleting일 때 부모 행을 삭제시 자식 행이 같이 삭제 되도록 하는 DataProvider.Options.changeDescendants 옵션 추가
8. TreeView에서 자식 행을 가져오는 **getChildren**등의 함수와 addTreeDataRow, insertTreeDataRow의 함수에서 **rowId**를 -1(보이지 않는 최상위 Level Row)로 지정할 수 있도록 개선 [TreeView DataModel](http://demo.realgrid.com/Demo/TreeDataModel) 페이지 참조.
9. setCurrent함수에서 selected 매개변수 추가, selected가 false일 때 selection이 해제되지 않도록 개선
10. checkRow 호출 시, 보이지 않는 행의 경우 check가 변경되지 않는 문제 해결
11. TreeView에서 icon이 없을 때 하위 Level Row과의 연결선이 제대로 그려지지 않는 문제 해결
12. TreeView에서 **getSelectionData** 호출하면 빈 Array전달되는 문제 해결
13. GridBase.**getSelectionData** 호출 시 초기 컬럼 설정에 따른 Data가 반환되던 문제 해결
14. DisplayOptions.**fitStyle**을 evenFill로 했다가 none으로 변경했을 때 그룹내 컬럼크기 변경 시 마지막 컬럼의 크기가 변경되던 문제 해결
15. TreeView에서 hideDeletedRows가 true이고 softDeleting이 true일 때 삭제된 row가 화면상에서 사라지지 않는 문제 해결
16. 초기 load시 visible이 false였던 컬럼을 visible을 true로 설정할 때 style이 적용되지 않는 문제 해결
17. SelectionStyle.Rows 이고 Fixed.rowCount가 0보다 클 때 선택행이 고정행에 포함될 때 잘못 처리되는 문제 해결
18. 컬럼 이동 시 Visible False인 컬럼이 있을 경우 발생하는 오류 수정
19. TreeView에서 softDeleting이 true일 때 clearRowStates(true)을 실행해도 삭제된 Row가 제거되지 않는 문제 해결

