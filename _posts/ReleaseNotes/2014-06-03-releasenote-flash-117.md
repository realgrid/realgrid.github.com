---
layout: post
title: Released RealGrid Flash 1.1.7
date: 2014-06-03 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.7
---


1. Block Copy/Paste 구현. Excel 텍스트 클립보드 포맷을 기반으로 동작. copyOptions, pasteOptions 를 통해 다양한 설정 지원. [Copy & Paste](http://demo.realgrid.com/Demo/CopyAndPaste) 페이지 참조.
2. Row Grouping Header의 문자열에 지정할 수 있는 변수 추가. [Row Grouping](http://demo.realgrid.com/Demo/RowGrouping) 페이지 참조.
3. softDelete된 데이터행을 Grid Item 목록에서 제외시킬 수 있는 그리드**hideDeletedRows** 속성 추가. 기본값은 false. [Deleting](http://demo.realgrid.com/Demo/Deleting) 페이지 참조.
4. DataField.**header** 속성 추가. 이 값을 RowGroup header 등에서 사용할 수 있음.
5. Indicator cell을 클릭했을 때 행이 선택되지 않도록 하는 Indicator.**selectable** 옵션 추가. [Indicator](http://demo.realgrid.com/Demo/Indicator) 페이지 참조.
6. EditOptions.**validateOnExit**를 true로 하면 편집하지 않은 경우에도 셀을 벗어날 때 Column Validation이 실행됨.
7. DataProvider에 getValue, setValue 함수 추가. [Get Values](http://demo.realgrid.com/Demo/GetValues) 페이지 추가.
8. DataProvider에 한 필드의 여러행 값을 가져오는 getFieldValues 함수 추가. [Get Values](http://demo.realgrid.com/Demo/GetValues) 페이지 추가.
9. 그리드 내부에서 표시하던 Validation 에러 등을 javascript excpetion으로 throw 하도록 변경하였습니다.
10. 데이터셀의 포커스 이동을 셀 단위로 변경.
11. TreeView에서 불필요한 Line이 그려지는 문제 수정.
12. Number editor 에서 '-' 키 입력 문제 및 값에 콤마(,)가 포함된 경우 값 처리 문제 수정.
13. 한글 입력중 좌우 방향, TAB, ENTER 키를 입력하면 바로 이동이 안되는 문제 개선.
14. CheckBar.exclusive가 true일 때 선택된 행을 클릭시 선택이 해제되지 않도록 개선.
15. 사용자가 number/datatime/boolean 필드셀에서 빈 문자열을 입력하면 기존 값이 null, NaN이 아닌 경우 undefined로 값이 저장되도록 개선.
16. 행 추가 시에는 상태 변경 이벤트(onRowStateChanged)가 발생하지 않도록 함.
17. 고정 컬럼이 있을 때 fitStyle 지정 에러 개선.

