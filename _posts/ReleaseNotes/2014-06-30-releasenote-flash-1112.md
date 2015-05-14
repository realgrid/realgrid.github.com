---
layout: post
title: Released RealGrid+ 1.1.12
date: 2014-06-30 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.12
---

1. 이전 릴리즈 중 그리드가 DataProvider의 client로 등록되는 루틴에 문제 포함. client가 편집 중일 때 DataProvider에 변경이 생기면 **"Client is editing" 에러**가 발생해야 함.  
     <span style="color:Red">DataProvider 함수들을 직접 호출해서 데이터를 변경할 때는, 반드시 먼저 그리드의 **commit()**이나 **cancel()**를 호출해서 편집을 먼저 완료해야 함.</span> [Set Values](http://demo.realgrid.com/Demo/SetValues) 페이지 확인. [Add Data Row](http://demo.realgrid.com/Demo/AddDataRow) 등에서 편집 중 데이터 변경 테스트.
2. 입력 값의 범위에 제한을 줄 수 있는 [Subtype](http://demo.realgrid.com/Demo/Subtypes) 개념 및 구현 추가.
3. GridView.groupBy(null)이나 groupBy([]) 로 호출하면 row 그룹핑 해제.
4. 그리드의 setColumn() 함수로 현재 포커스를 가진 셀 컬럼의 **readOnly**, **editable**을 변경할 수 있도록 개선.
5. 그리드의 fitStyle이 "none"이 아닐 때 **setColumn()** 호출하면 해당 컬럼의 너비가 조금씩 줄어드는 문제 개선.
6. 그리드의 fitStyle이 "none"이 아닐 때 RowGroup header의 너비가 fit 되지 않는 문제 개선.
7. [컬럼 vaildation](http://demo.realgrid.com/Demo/EditColumnValidation) 에러 힌트 표시가 오른쪽이나 아래쪽으로 넘치는 문제 개선.
8. 고정 컬럼이 존재할 때 수평 스크롤바 track 영역을 클릭하면 발생하는 에러 개선.
9. 수평 스크롤바 track 영역을 클릭하면 한 컬럼씩 스크롤 되도록 개선.
10. [TreeView export](http://demo.realgrid.com/Demo/ExcelTreeView) 시 표시되는 컬럼 수가 트리 level 보다 적으면 발생하는 에러 개선.
11. DropDown 편집기와 Date 편집기에 **dropDownWidth** 및 **dropDownPosition** 속성 추가. [Editors](http://demo.realgrid.com/Demo/Editors) 페이지 참조.
12. 필드의 합계값을 가져올 수 있는 GridBase.**getSummary(field, summary)** 함수 공개. field는 필드명이나 필드인덱스가 될 수 있음. value는 "min", "max", "sum", "avg" 등의 값이 될 수 있음. [Column Footer](http://demo.realgrid.com/Demo/ColumnFooter) 페이지 참조.
13. Flash 보안 상의 이유로 Flash object 외부에서 발생된 마우스 클릭 이벤트가 그리드에 전달되지 않음. 따라서 그리드 Dropdown 편집기나 Date 편집기의 리스트가 펼쳐진 상태에서 그리드 외부를 마우스 클릭하면, 리스트가 닫히지 않은 상태로 남게 됨.  
     언제든 그리드 내부를 클릭하거나 esc 키 등을 누르면 바로 닫히게 되므로 대개의 경우 문제가 없다고 여겨지지만, 문제라고 판단 될 수 있는 경우를 위해 편집기 리스트를 강제로 닫게하는 GridBase.**closeList()** 함수를 추가하고, **realgridplus.js**에 전역 **"mousedown"** 이벤트 핸들러를 등록. 이 핸들러는 클릭 위치를 계산해서 그리드 위치가 아니거나 클릭된 그리드를 제외한 다른 그리드의 리스트를 GridBase.**closeList** 함수를 호출해서 닫히게 함.  
     다만 이 핸들러는 전역 핸들러이므로 당연히 grid flash object에도 영향을 줄 수 있는데, <span style="color:Blue">만일 특정 상황에서 마우스 클릭으로 DropDown 편집기나 Date 편집기의 리스트가 펼쳐지지 않는다면, 이 핸들러가 그리드 위치를 제대로 판단하지 못하고 마우스 이벤트를 capture 해 간 것이므로 핸들러 등록을 취소하고, 우리테크에 바로 공지 요망.</span>
