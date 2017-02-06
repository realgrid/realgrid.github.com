---
layout: apipost
title: Edit Validation
part: Features
objectname: 
directiontype: 
permalink: /api/features/Edit Validation/
tags:
  - Validation
  - Check
  - 검증
  - 값 체크
  - 체크
---

#### Description

실행 시간에 사용자가 값을 변경하고 행 이동 등을 통해서 변경 값을 data provider에 전달(commit)하기 전에 그리드 수준에서 입력 값들의 타당성을 검증할 필요가 있다. 또는, 데이터셀 입력이 완료되는 시점에 입력된 값을 검증할 수도 있다. 하나의 검증은 판정식과 에러 레벨등으로 정의된다. 리얼그리드는 컬럼별 혹은 행 수준의 입력 검증 방식을 제공한다.

* Column Validation: 데이터셀 입력이 완료되는 시점에 입력 값의 타당성을 검증하고 실패하면 데이터셀의 우측에 실패 아이콘을 표시한다.

* Row Validation: 데이터행의 입력이 완료되는 시점에 전체 필드의 입력 값에 대한 타당성을 검증하고, 실패하면 에러 레벨에 따라 메시지를 표시하고 data provider에 commit 하지 않는다.

---

#### Demo Links

* [Edit Column Validation Demo](http://demo.realgrid.net/Demo/EditColumnValidation) 참조  
* [Row Vaildations](http://demo.realgrid.com/Validation/RowValidation/) 참조  
