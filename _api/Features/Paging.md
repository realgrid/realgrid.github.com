---
layout: apipost
title: Paging
part: Features
objectname: 
directiontype: 
permalink: /api/features/Paging/
---


리얼그리드의 [Data Provider](/api/features/) 및 Item 모델에 기반해서 다양한 방식의 페이징을 구현할 수 있다. 우선, 리얼그리드에 표시되고 관리되는 모든 데이터는 DataProvider에 존재한다. 각 페이지에 표시될 데이터셋 역시 그리드가 참조하는 DataProvider에 모두 존재해야 한다. 다만, 페이지마다 몇번째 행부터 몇 개의 행을 표시할 지를 그리드 수준에서 지정하게 된다. 기본적으로는 표시되는 위치와 DataProvider 행의 위치가 동일하지만, DataProvider를 고정된 몇 개의 페이지 데이터셋만을 유지하는 버퍼로 사용할 수도 있다. 또한, 예상되는 페이지 개수를 미리 지정하고 페이지 변경 이벤트 내에서 요구되는 데이터셋을 load 함수 등으로 DataProvider에 추가할 수도 있다.

#### See Also
> "Paging Demo":http://demo.realgrid.net/Demo/PagingOverview 참조
