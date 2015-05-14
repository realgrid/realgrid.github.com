---
layout: post
title: Released RealGrid+ 1.1.20.2533
date: 2014-11-06 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.20.2533
---


1. 셀의 텍스트와 아이콘을 HyperLink형태로 표시하는 LinkCellRenderer 추가, Link클릭시 발생하는 **onLinkableCellClicked** 이벤트 추가. [LinkCellRenderer](http://demo.realgrid.com/Demo/LinkCellRenderer) 페이지를 참조.
2. 체크시 필터가 되는 ColumnFilter와 달리 팝업등 부가적인 행동를 할 수 있는 ColumnFilterAction 추가, 클릭시 발생하는 **onFilterActionClicked** 이벤트 추가 [ColumnFiltering](http://demo.realgrid.com/Demo/ColumnFiltering) 페이지를 참조.
3. **getDistinctValues** 함수 추가, 특정 필드의 전체 값을 순차 정렬하여 지정된 갯수만큼을 반환
4. **PasteOptions.enabled** 속성 추가, enabled가 false일 때 클립보드에 복사한 값을 그리드에 붙여넣기 불가.
5. CheckBarOptions.exclusive가 true일때 checkable이 false인 경우 표시되지 않던 문제가 개선되었습니다.

