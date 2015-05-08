---
layout: post
title: Released RealGrid Flash 1.1.16
date: 2014-08-22 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.16
---


1. 셀에 지정된 DataCellStyle id 가져오는 getCellStyle 함수 추가
2. DataProvider.loadData에서 params에 문자열 값을 지정하면 FormData가 아니라 ContentString으로 전달하도록 기능 추가
3. RealGrids.SortDirection.**DSCENDING**을 RealGrids.SortDirection.**DESCENDING**으로 변경
4. Column Grouping이 horizental일 때 Excel Export 시 발생하는 오류 수정
5. checkBar header 클릭하여 전체 선택 해제 시 onItemAllChecked 이벤트에서 checked true로 전달되는 오류 수정
6. column.readOnly나 cellStyle.readOnly가 true일 때 CheckCellRender에서 클릭으로 값을 변경하지 못하도록 수정
7. DataProvider.setIconIndex 호출 시 새로 고쳐지지 않는 오류 수정
8. TreeView Footer 계산 오류 수정
9. Column.Styles.textWrap 속성이 동작하지 않는 오류 수정
10. LocalDataProvider.setJsonRows함수의 start, count argumnet가 동작하지 않는 오류 수정
11. TreeView내 복사한 셀이 붙여넣기가 되지 않는 오류 수정
12. TreeView 컬럼 이동이 안되는 문제 수정
13. LookupDisplay가 true인 컬럼을 MergedRowGrouping할 경우 오류 발생하는 현상 수정
