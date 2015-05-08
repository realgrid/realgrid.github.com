---
layout: post
title: Released RealGrid Flash 1.1.22.2568
date: 2015-01-29 01:01:01 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.22.2568
---

1. product용 swf파일과 evaluation license, evaluation용 swf파일과 product license를 잘못 사용하는 경우 사용이 불가능하도록 제한("Invalid licence type")
2. product버전의 About dialog에서 "Unauthorized product !"라고 표시되는 문제 개선
3. readOnly Cell에서 그리드 외부의 control로 focus가 이동할 때 IME가 활성화되지 않는 경우를 위해 **RealGrids.resetIme()**와 **RealGrids.enableImeOnExit(reset)** 추가. **reset** parameter 값이 true이면 외부 control에 마우스 클릭할 때 RealGrid 자체 click callback에서 resetIme를 호출
4. **GroupingOptions.fixMergedColumns** 속성 추가(기본값은 true). true 이면 merged row grouping 된 컬럼은 이동이나 다른컬럼을 그 위치로 이동이 불가
5. Excel저장시 첫행에 문서 타이틀을 지정할 수 있는 **GridExportOptions.documentTitle** 속성 추가, 문자열 또는 Object 형태로 지정이 가능, Object의 경우 **text** 속성에 문자열을 지정하고 **styles** 속성에 Cell Styles를 지정.  
     [Export To Excel file](http://demo.realgrid.com/Demo/ExportToExcel) 페이지를 참조.
6. **DataProvider.datetimeFormat**에 월과 일의 값에서 앞자리 0를 생략할 수 있는 패턴 추가. [DataType](http://demo.realgrid.com/Demo/DataType) 페이지를 참조.
7. Column Layout기능과 관련 기능 추가및 개선  
     **GridBase.restoreColumns()**에 **restoreSize** parameter 추가(기본값은 true). true이면 원 컬럼Set에 지정되어 있던 너비로 재지정 가능.  
     layout 저장시 사용되는 **getDisplayColumns()**를 대신 할 **saveColumnLayout()** 추가.  
     그 외 Layout설정시 Group header 누락되는 문제, 저장 후 복원 시 내부 컬럼 크기가 잘못되는 문제, 복원시 내부 컬럼이 표시되지 않는 문제등 개선
8. columnFilter에 **hidden** 속성이 추가되고 hidden이 true일 때 Filter List에 표시하지 않도록 개선. 또한 filterAction이 1개이고 filter가 없거나 모두 hidden일 때 filterList를 표시하지 않고 바로 onFilterActionClicked callback을 호출.
9. **GridBase.searchItem()**에서 **startItem**이 itemCount 이상이고, **wrap**이 true일 때, 처음부터 다시 찾도록 개선. **partialMatch**가 true일 때, 빈문자열이 검색 되지 않도록 개선
10. **LocalDataProvider.setXmlRows(source, rowElement, start, count)** 함수 추가
11. **LocalDataProvider.addRow()** 호출 시 추가된 dataRow(실패 시 -1)를 return하도록 개선.
12. **GridBase.setStyles**호출 시 checkBar.figureBackground 속성이 있을 때 오류 발생하는 문제 개선.
13. 컬럼 생성 시 Column.height 속성이 전달되지 않는 문제 개선.
14. **GridBase.setCheckableExpression()** 호출시 expression이 null일 때 발생하는 오류 해결.
15. number field의 값이 null이나 undefined일 때 엑셀 Export시 NaN으로 저장되는 문제 개선.
