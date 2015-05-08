---
layout: post
title: Released RealGrid Flash 1.1.10
date: 2014-06-19 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.10
---


1. [Number 편집기에](http://demo.realgrid.com/Demo/Editors) **positiveOnly** 및 **integerOnly** 속성 추가. positveOnly이면 "-" 키 입력 불가. integerOnly면 ".", "e", "E" 키 입력 불가.
2. Dropdown 및 Date 편집기 표시와 관련된 문제점들을 개선.  
     Dropdown 리스트의 너비가 최소한 리스트 항목들을 모두 표시할 수 있는 정도가 되게 함.  
     리스트가 최우측 컬럼에 표시될 때 그리드 영역을 넘어가지 않도록 함.  

3. 추가 중인 행에서 Dropdown및 Date 편집기 버튼이 동작하지 않은 문제 개선.
4. [Shape 셀 renderer](http://demo.realgrid.com/Demo/ShapeCellRenderer)에서 shape 표시 위치 문제를 개선.

Version 1.1.9 - 2014/06/16

5. [Expression 개요](http://demo.realgrid.com/Demo/ExpressionConcept) 페이지가 정리됐습니다. 수식에서 실행 시간 변수나 Indexer로 len, lenb를 사용하는 대신, **연산자 len, lenb 를 사용해야 합니다.**  
     실행 시간 변수 len, lenb는 동작하지 않습니다. 즉,  
     **"len > 3" 대신 "len value > 3" 나 "len(value) > 3" 으로 사용**해야 합니다. **lenb**도 동일합니다.
6. 행 편집 중 셀편집 완료와 동시에 좌우 스크롤되는 경우 편집된 셀에 기존 데이터가 표시되는 문제 개선.
7. 병합모드 Row grouping 중 collapsed된 첫번째 행의 셀을 표시하지 못하는 문제 개선.
8. 컬럼이나 행 그룹의 합계 expression 변수 중 **min**, **max**, **stdev** 값이 잘못 표시되는 문제 개선.
9. 컬럼이나 행 그룹의 합계 expression 변수 중 var/stdev 값을 var/varp 및 stdev/stdevp 로 구분해서 사용할 수 있도록 함.  
     모집단 분산이 필요하다면 **기존에 수식에 적용된 stdev는 stdevp로, var는 varp로 변경해야 함.** [Expression 개요](http://demo.realgrid.com/Demo/ExpressionConcept) 참조.
10. 컬럼 셀 동적 스타일에서 **value** 및 **values** 로 다른 필드값을 참조할 수 있도록 함. [Expression 개요](http://demo.realgrid.com/Demo/ExpressionConcept) 참조.
11. 그리드 **edit** 옵션의 **skipReadOnly** 속성을 true로 지정하면 readOnly이거나 editable이 false인 컬럼은 키보드로 셀을 이동할 때 건너뛰도록 함.

