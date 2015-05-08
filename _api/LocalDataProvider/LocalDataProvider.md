---
layout: apipost
title: LocalDataProvider
part: Objects
objectname: LocalDataProvider
directiontype: 
permalink: /api/LocalDataProvider/
---


> GridView를 위한 지역 메모리 Data provider이다. 그리드의 모든 행을 메모리에 순서대로 보관한다.  
> * 2차원 배열이라고 생각하면 된다.   
> * 행별로 key를 유지하지 않는다.  
> * 각 행은 실제 데이터를 가지고 있지 않을 수도 있다.   
> * hasData 함수로 실제 데이터가 있는 지 확인 할 수 있다.    
> * Sorting이나 Filtering은 이 원본 데이터 변경 없이 아이템 모델 수준에서 관리된다.   
> * 데이터셀(행 * field)의 변경이나, 행의 추가/수정/삭제 시 실행 전후 콜백 수준의 이벤트가 발생하고, 아이템모델을 거쳐 최종 클라이언트(그리드)에게 전달된다.    
> * 하나의 LocalDataProvider에 하나 이상의 클라이언트(그리드)가 연결될 수 있다. (Web 버전에서는 아직 제한되고 있다)  
