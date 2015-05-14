---
layout: post
title: Released RealGrid+ 1.1.14
date: 2014-07-09 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.14
---

1. DataCellStyle이 DataProvider 변경과 동기화 되도록 변경. 즉, 행(들)이 삭제되면 해당 행의 DataCellStyle이 삭제되고, 나머지 행들과 DataCellStyle의 위치를 맞추도록 함.
2. LocalDataProvider.setRows(data, start, count)에서 count가 data에 포함된 행의 개수를 벗어나게 해도, data에 들어 있는 만큼의 행들만 저장하도록 변경.
3. TreeView line 렌더링 개선.
4. TreeDataProvider.getAncestor()에서 마지막 -1(root)이 포함되는 문제 개선. [Tree DataModel](http://demo.realgrid.com/Demo/TreeDataModel) 페이지 확인.
5. 병합모드 row grouping 마지막 행이 잘못 표시되는 문제 개선.
6. 병합모드 row grouping에서 expander를 감출 수 있도록 RowGroupOptions.mergeExpander 속성 추가. [Merged Row Grouping](http://demo.realgrid.com/Demo/RowGroupMerging) 페이지 확인.
7. GridBase.setValues(itemIndex, values, strict)로 strict 매개변수 추가, true로 지정하면 내부적으로 DataProvider.updateRow 대신 updateStrictRow 호출. 즉, 지정한 필드값만 변경. 편집 중인 행인 경우 dataProvider를 변경하지 않고, 편집 값들을 변경.
8. Row grouping일 때 GridBase.searchItem() 실패 개선.
9. GridView.mouseToIndex()로 Column 그룹의 하위 컬럼을 찾지 못하는 문제 개선.




