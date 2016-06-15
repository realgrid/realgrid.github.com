---
layout: apipost
title: LoadPolicyType
part: Types
typename: Constants
order: LoadPolicyType
objectname: 
directiontype: 
permalink: /api/types/LoadPolicyType/
tags:
  - 정책
  - 데이터로드
  - 팔러시
---


#### Description

 loadData()에서 사용하는 clientPolicy의 타입. 데이터 로드 정책을 결정한다.

#### Properties

> **ERROR**  
> Value: "error"  
> 편집 중에 데이터 로딩이 완료되면 에러를 표시하고 내려받은 데이터셋은 무시된다. 기본값 이다.

> **CANCEL**  
> Value: "cancel"  
> 편집을 취소 시키고 데이터셋을 Data Provider에 저장한다.  

> **COMMIT**  
> Value: "commit"  
> 편집을 완료 시키고 데이터셋을 Data Provider에 저장한다. 편집 완료 중 에러가 발생하면 Cancel 시킨다.

> **DELAY**  
> Value: "delay"  
> 로딩이 완료된 데이터셋을 보관한 후 사용자 편집이 완료된 후 가능한 시점에 Data Provider에 저장한다. 저장될 때 Data Provider의 onDataSaved 콜백이 호출된다.
