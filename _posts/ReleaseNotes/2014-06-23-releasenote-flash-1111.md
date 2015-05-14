---
layout: post
title: Released RealGrid+ 1.1.11
date: 2014-06-23 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.11
---

1. GroupingOptions.**linear** 속성 추가. true로 지정하면 그룹핑 컬럼들을 일렬로 배치. [RowGrouping](http://demo.realgrid.com/Demo/RowGrouping) 페이지를 참조.
2. TreeView에서 Expand/Collapse 시 기존 focus index가 가능한 유지되도록 개선. Focus를 갖는 행이 collapse될 때는 표시되는 가장 근접한 조상 아이템으로 포커스 이동.
3. Excle export 시 RowGroup footer 값이 표시되지 않는 문제 개선.
4. fitStyle이 적용됐을 때 ColumnGroup에 포함된 컬럼들의 너비가 고르게 반영되지 않는 문제 개선.
5. Data load option에 count와 filter가 모두 존재할 때, count만큼 가져오지 못하는 문제 개선.
6. 행이 존재하지 않는 빈 그리드에 Row grouping을 실행할 때 전후로 발생하는 문제 개선.
