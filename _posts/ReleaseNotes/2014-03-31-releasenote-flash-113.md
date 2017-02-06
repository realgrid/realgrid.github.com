---
layout: post
title: Released RealGrid Flash 1.1.3
date: 2014-03-31 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.3
---

1. 사용자 편집 중 loadData() 대응 방식 확장. [Loading Policy](http://demo.realgrid.com/Demo/LoadingPolicy) 참조.
2. [Load Filter](http://demo.realgrid.com/Demo/LoadFilter)를 이용해 로드된 데이터셋의 일부만 DataProvider에 저장.
3. loadData() options의 **rows**에 하위 영역 지정. [Load Source](http://demo.realgrid.com/Demo/LoadSource) 참조.
4. CreateAndDeleted 상태 무시 옵션 추가. [Row State](http://demo.realgrid.com/Editing/RowStates/) 참조.
5. LocalDataProvider에 insertRows(), updateRows() 함수 추가.
6. 컬럼 없는 빈 그리드에서 마우스 오른쪽 클릭 에러.
7. TreeView.loadData() parent = -1 지정시 에러 개선.
8. LocalDataProvider.setRowCount() 에서 defaults 매개 변수 적용 안되는 문제.
9. Font에 따라 기본 row 높이가 1 픽셀 정도 달라질 수 있음.
