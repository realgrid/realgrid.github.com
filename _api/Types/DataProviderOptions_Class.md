---
layout: apipost
title: DataProviderOptions
part: Types
typename: Config Classes
order: DataLoadOptions
objectname: 
directiontype: 
permalink: /api/types/DataProviderOptions/
---


> LocalDataProvider 동작에 관한 설정 모델이다.

#### Properties

> **booleanFormat**  
> Type: string  
> Default: null  
> 데이터셋을 로드할 때 boolean값으로 변환하기 위한 포맷. null이면 내부에 설정된 기본값을 따른다.  

> **datetimeFormat**  
> Type: string  
> Default: true     
> 데이터셋을 로드할 때 datetime 값으로 변환하기 위한 포맷. null이면 내부에 설정된 기본값을 따른다.  

> **amText**  
> Type: string  
> Default: true  
> 오전을 나타내는 문자열  

> **pmText**  
> Type: boolean  
> Default: true  
> 오후를 나타내는 문자열  

> **baseYear**  
> Type: number  
> Default: 2000  
> 데이터셋을 로드할 때 년도의 값이 100보다 작은 경우 자동으로 추가할 기준 년도. 

> **insertable**  
> Type: boolean  
> Default: true  
> 행을 추가할 수 있으면 true.  

> **updatable**  
> Type: boolean  
> Default: true  
> 행을 수정할 수 있으면 true.  

> **deletable**  
> Type: boolean  
> Default: false  
> 행을 삭제할 수 있으면 true.  

> **softDeleting**  
> Type: boolean  
> Default: false  
> checkStates가 true이고 이 값도 true면 행 삭제 요청 시 실제로 삭제하지 않고 상태만 "deleted"나 "createAndDeleted"로 바꾼다.  

> **deleteCreated**  
> Type: boolean  
> Default: false  
> checkStates가 true이고 softDeleting이 true일 때 "created" 상태의 행을 삭제하면 "createAndDeleted"로 상태가 변경되는데, 이 값을 true로 지정하면 실제로 삭제한다.  

> **checkStates**  
> Type: boolean     
> Default: true  
> true이면 행 상태를 관리한다.  

> **subtypeEnabled**  
> Type: boolean  
> Default: true  
> subType기능의 활성화 여부를 지정한다.  
