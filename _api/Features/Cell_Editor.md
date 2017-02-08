---
layout: apipost
title: Cell Editor
part: Features
objectname: 
directiontype: 
permalink: /api/features/Cell Editor/
tags:
  - editor
  - multiline
  - dropDown
  - combo
  - date  
  - 에디터
  - 멀티라인
  - 서치
  - 검색
  - 날짜 
  - 콤보
  - 드롭다운

---


#### Description

데이터셀의 값을 수정하기 위해서는 사용자에게 편집기를 제공해야 한다. 각각의 데이터컬럼에 컬럼의 데이터셀들을 위한 편집기의 종류를 지정할 수 있다. 리얼그리드는 아래와 같은 몇 가지의 기본 셀 편집기를 제공한다.

* [LineCellEditor](/api/types/LineCellEditor) - 한 줄 텍스트 입력.  
* [MultiLineCellEditor](/api/types/MultiLineCellEditor) - 여러 줄 텍스트 입력.  
* [DropDownCellEditor](/api/types/DropDownCellEditor) - 드롭다운 리스트를 펼쳐서 항목을 선택할 수 있다.  
* [SearchCellEditor](/api/types/SearchCellEditor) - 원하는 셀 데이터를 찾을 수 있다.    
* [NumberCellEditor](/api/types/NumberCellEditor) - 숫자와 관련 기호만을 입력할 수 있다. 
* [DateCellEditor](/api/types/DateCellEditor) - 날짜를 입력하거나 달력 리스트를 펼쳐서 날짜를 선택할 수 있다.  

셀편집기 별로 지정할 수 있는 속성들이 있다. 데이터컬럼에 편집기를 지정하지 않으면 LineCellEditor가 기본으로 사용된다.
 

---

#### API Links

* [LineCellEditor](/api/types/LineCellEditor)
* [MultiLineCellEditor](/api/types/MultiLineCellEditor)
* [SearchCellEditor](/api/types/SearchCellEditor)
* [DropDownCellEditor](/api/types/DropDownCellEditor)
* [NumberCellEditor](/api/types/NumberCellEditor)
* [DateCellEditor](/api/types/DateCellEditor)

#### Demo Links

* [Editors Demo](http://demo.realgrid.com/Editing/Editors/)      
 