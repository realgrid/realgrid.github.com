---
layout: post
title: Released RealGrid Flash 1.0.13
date: 2014-02-13 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.0.13
---

1. CheckCellRenderer.editable이 true이고 startEditOnClick이 true이면 focus가 아닌 Check 셀을 클릭해도 셀의 값이 변경됨  
     (이전 버전의 경우 처음 클릭시 focus가 되고 다시 클릭하면 check가 클릭 되었음)
2. dropDown editor에 caseSensitive 속성 추가. 입력해서 찾을 때 대소문자 구분 여부. 기본값은 false
3. EditOptions에 checkDiff 속성 추가. true이면 row commit 시점에서 이전값과 비교하여 동일할때 RowState를 변경하지 않음. 기본값은 false
4. dropDown editor에서 입력시 찾지못하는 오류 해결.
5. 컬럼 헤더 클릭시 onDataCellClicked 발생하는 오류 해결.
6. FixedOptions.rowCount 설정 시 indicator영역 마우스 포인트 이동시 발생하는 오류 해결.
7. ItemCount 변경시 current.itemIndex가 itemCount보다 클 경우 발생하는 오류 해결.
