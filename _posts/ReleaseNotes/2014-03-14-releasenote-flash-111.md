---
layout: post
title: Released RealGrid Flash 1.1.1
date: 2014-03-14 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.1
---

1. Backspace나 Delete키로 입력을 시작하고 바로 셀을 빠져나가면 원복되는 문제 개선.
2. booleanFormat, datetimeFormat 스타일 속성 추가. [Styles](http://demo.realgrid.com/GridStyle/StylesOverview//) 및 [Data Type](http://demo.realgrid.com/DataManager/DataType//) 페이지 참조.  
     **기존의 dateFormat 대신 datetimeFormat을 사용해야 함. dateFormat을 사용한 기존 코드 업그레이드 권고함.**
3. 셀 에디터에 booleanFormat, datetimeFormat 속성 추가하고 Boolean 필드 값을 입력하는 문제 개선. [Data Type](http://demo.realgrid.com/DataManager/DataType//) 페이지 참조.
4. 데이터 행 생성 후 편집하면 상태가 Created에서 Updated로 변경되던 것을 Created로 유지되도록 함.
5. DataColumn에 labelField 속성 추가. [Column Lookup](http://demo.realgrid.com/CellComponent/LookupColumn//) 페이지 참조.
6. LookupTree 기능 추가. [Lookup Tree](http://demo.realgrid.com/CellComponent/LookupTree//) 페이지 참조.
