---
layout: post
title: Released RealGrid Flash 1.1.0
date: 2014-02-28 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.0
---

1. Flash wmode를 **direct**로 변경.
2. GridView.onSelectionEnded 이벤트 추가. 선택을 시작하고 마우스가 Up 되거나, 키보드가 Up 되면 발생. [Selecting](http://demo.realgrid.com/Demo/Selecting) 페이지 참조.
3. 고정 컬럼이 설정되면 전체적으로 느려지는 현상 개선.
4. 행 그룹 Footer에 그룹 합계가 잘 못 표시되는 문제 해결.
5. 마지막 행에서 appending 종료(commit 혹은 cancel) 시 포커스셀의 위치가 잘못되는 현상 개선.
6. TreeView 첫번째 컬럼에서 Ctrl + Left / Right 키로 선택된 행을 expand/collapse 하도록 함.
7. 컬럼 병합 셀에 현재 표시되는 최상위 행의 값을 표시하는 문제. 병합의 실제 최상위 값으로 표시하도록 개선.
8. 첫 행에서 마우스로 행 크기 변경 시작 시 포커스가 첫 행으로 이동하는 문제 개선.
9. 수평 스크롤을 최상위 컬럼 그룹 대신 최상위 데이터 컬럼 단위로 실행하도록 변경.
10. 시리즈 컬럼 등 컬럼 자동 너비 맞추기 실행 에러 개선.
