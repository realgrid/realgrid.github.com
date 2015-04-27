---
layout: apipost
title: Data Provider
part: Fectures
objectname: DataProvider
---

Data Provider
리얼그리드의 GridView와 TreeView가 화면에 표시하는 데이터는 각각 LocalDataProvider와 TreeDataProvider가 제공한다. DataProvider의 데이터셋은 RDB의 Table과 유사하게 고유한 자료형을 갖는 하나 이상의 DataField와 하나 이상의 데이터행들로 구성된다. 그리드나 트리의 컬럼은 Data Provider의 DataField에 연결되고, 각각의 아이템들은 연결된 데이터행의 값을 표시한다. 두 Data Provider는 loadData 함수로 서버에서 내려받은 데이터셋이나, setRows 등의 Javascript를 통해 추가된 데이터셋을 로컬 메모리에 저장하고 관리한다. 실행 시간에 사용자가 편집 등을 통해 그리드나 트리에 입력한 데이터 또한 그리드나 트리에 연결된 Data Provider에 저장된다. 어떤 경로든 Data Provider에 수정/추가/삭제 등의 변화가 생기면, 이 Data Provider에 연결된 그리드나 트리뷰에 이벤트가 전달되고 지정된 콜백 함수가 호출된다.