---
layout: post
title: Released RealGrid Flash 1.1.5
date: 2014-05-08 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.5
---

1. 리얼그리드 에러 처리 방식이 변경. [Error Handling](http://demo.realgrid.com/Demo/ErrorHandling) 페이지 참조.
2. object element의 **flashvars** param에 **hideLoader=true**를 추가하면 flash player의 preLoader progress bar를 표시하지 않도록 함. swfobject의 embedSWF를 사용하는 경우 flasvarsObj 매개변수에 위의 값을 추가한다.
3. TreeView의 data model 및 주요 api 개선. [TreeView Data Model](http://demo.realgrid.com/Tree/TreeDataModel) 페이지 참조.
4. TreeView의 CheckBar 관련 개선. [TreeView CheckBar](http://demo.realgrid.com/Demo/TreeCheckBar) 페이지 참조.
5. DataCell 단위로 스타일 및 편집 속성을 지정할 수 있도록 하는 DataCellStyle 기능 추가. [DataCellStyle 개요](http://demo.realgrid.com/Demo/DataCellStyleConcept), [DataCellStyle 편집 속성](http://demo.realgrid.com/Demo/DataCellStyleEditing) 페이지 참조.
6. 전체 컬럼의 너비가 그리드 본체 영역보다 작을 때 자동으로 채우는 기능 추가. [컬럼들 채우기](http://demo.realgrid.com/Columns/GridFitting/) 페이지 참조.
7. DataProvider.**getRowStateCount(states)** 함수 추가. **states**는 **["created", "updated"]**, **"craete"**, 혹은 **"none"**을 제외한 전체 상태를 가져오는 **"*"**로 지정할 수 있다. [Row States](http://demo.realgrid.com/Editing/RowStates/) 페이지 참조.
8. checkBar.**exclusive**가 true일 때 라디오버튼으로 표시. [CheckBar](http://demo.realgrid.com/GridComponent/CheckBar/) 페이지 참조.
9. 편집기에 **textCase** 속성 추가. **TextInputCase.NORMAL**, **TextInputCase.UPPER**, **TextInputCase.LOWER** 중 하나로 지정할 수 있음. [Editors](http://demo.realgrid.com/Editing/Editors/) 페이지 참조.
10. 그리드 editOptions.enterToTab 속성 추가. true로 지정하면 Enter 키에서 다음 셀로 이동. [Editors](http://demo.realgrid.com/Editing/Editors/) 페이지 참조.
11. IE 에서 tab 키로 셀 이동을 하기 위해서는 object 태그에 <param name='seamlesstabbing' value='false'> 태그를 추가해야 함. swfobject의 embedswf()를 호출하는 경우에는 **parObj** 매개 변수 객체에 속성을 추가함.
12. DropDownEditor를 정상적인 위치에 표시할 수 없을 때 표시하는 방식 개선.
13. Fiexed row 전체 높이가 일정 이상이면 편집기가 표시되지 않는 문제 개선.
14. Fiexed colum 전체 너비가 일정 이상일 때 포커스 컬럼 스크롤 문제 개선.
15. rowCount가 0일때 더블클릭시 onDataCellDblClicked 발생하는 문제 개선.
16. **showEditor()** 호출 시 기존 텍스트 남는 문제 개선. [행 추가](http://demo.realgrid.com/Editing/Inserting/), [행 수정](http://demo.realgrid.com/Editing/Updating/) 페이지 참조.

