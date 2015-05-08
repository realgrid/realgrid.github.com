---
layout: post
title: Released RealGrid Flash 1.1.2
date: 2014-03-22 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.2
---

1. [Merged row group](http://demo.realgrid.com/Demo/RowGroupMerging)에서 행이 생략되는 버그, 잘못된 셀이 표시되는 버그 개선.
2. Ver 1.1.1 에서 빈값으로 추가되거나 수정된 행이 있는 경우 Sorting 버그 개선.
3. Column 병합 상태에서 Insert, Append 시작하면 bounds error 발생 문제 개선.
4. Column 필터 선택 상자에 스크롤바가 표시되지 않는 문제 개선. 선택 상자의 크기를 지정할 수 있도록 함. [Column Filtering](http://demo.realgrid.com/Demo/ColumnFiltering) 페이지 참조.
5. TreeView의 [expandAll(), collapseAll()](http://demo.realgrid.com/Demo/TreeSetArrayData) 구현.
6. GridBase에 getEditingItem() 함수 추가. 현재 편집 중인 행의 값을 리턴. [Updating](http://demo.realgrid.com/Demo/Updating) 페이지 소스 참조.
7. DataProvider에 onRowUpdating, onRowUpdated 콜백 추가. [Updating](http://demo.realgrid.com/Demo/Updating) 페이지 소스 참조.
8. 대량 데이터를 Sorting, Filtering, Grouping할 때 Toast view 표시. [Toast View](http://demo.realgrid.com/Demo/ToastView) 페이지 소스 참조.

