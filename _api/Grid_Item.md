---
layout: apipost
title: Grid Item
part: Fectures
objectname: 
directiontype: 
permalink: /api/fectures/Grid Item/
---


RealGrid는 *데이터 모델* 과 화면 표시를 위한 *View 모델* 혹은, *Item 모델* 을 별도로 관리한다. 하나의 Item은 그리드나 트리의 한 행을 의미하고 그 행에 대한 참조 데이터 및 상태를 관리한다. 각 Item은 [Data Provider](/api/fectures/)의 한 행일 수도 있고, [Row Grouping](/api/fectures/)된 그리드의 행그룹 Header나 Footer가 될 수도 있다. 즉, *그리드나 트리는 Data 모델이 아니라 Item 모델을 화면에 표시* 한다. 그리드나 트리가 직접 [Data Provider](/api/fectures/)에 연결되지 않고 아이템 모델을 통해 참조한다. 수정/추가/삭제 등 사용자 편집 역시 Item 모델 수준에서 처리되고, 편집을 완료(commit)하는 시점에 변경 내용을 [Data Provider](/api/fectures/)에 전달하게 되고, Data Provider의 변경이 다시 그리드나 트리에게 이벤트로 전달되고 화면에 반영된다.

아이템 모델은 [Data Provider](/api/fectures/)와 별개로 표시할 데이터셋을 재 구성할 수 있다. 즉, 정렬하거나 필터링할 수 있고, [Row Grouping](/api/fectures/)을 할 수도 있다. 이 때 [Data Provider](/api/fectures/)의 원본 데이터셋은 변경되지 않는다. 이것 때문에 데이터셋의 행 개수와 그리드나 트리에 표시되는 아이템의 개수가 다를 수 있고, 순서도 당연히 달라질 수 있다. 또한, 사용자가 행 삽입이나 추가를 실행 중이라면 [Data Provider](/api/fectures/)에 존재하지 않는 데이터행 하나가 아이템 모델에 생성되기도 한다.
