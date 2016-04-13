---
layout: apipost
title: DataProviderOptions
part: Types
typename: Classes
order: DataLoadOptions
objectname: 
directiontype: 
permalink: /api/types/DataProviderOptions/
tags: 
  - dataProvider
  - setOptions
  - Options
  - 데이터프로바이더옵
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
> 더 이상 사용하지 않는 속성.   
> 행을 추가할 수 있으면 true.  

> **updatable**  
> Type: boolean  
> Default: true  
> 더 이상 사용하지 않는 속성.  
> 행을 수정할 수 있으면 true.  

> **deletable**  
> Type: boolean  
> Default: false  
> 더 이상 사용하지 않는 속성.  
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

> **restoreMode**  
> Type: string | [RestoreMode](/api/types/RestoreMode/)  
> Default: "none"    
> 복원모드를 지정한다.  

> **strictRestore**  
> Type: boolean  
> Default: false    
> undefined, null, 빈문자열을 다른 값으로 인식할지의 여부를 지정한다.  
> [restoreUpdatedStates()](/api/DataProvider/restoreUpdatedStates/)와 관계가 있다.  
> true일때 undefined -> "값변경" -> "" 으로 변경시 rowState가 복원되지 않는다.   

#### Examples   

<pre class="prettyprint">
	dataProvider.setOptions({
		datetimeFormat: "yyyy-MM-dd",
		booleanFormat: "0;1",
		softDeleting: true
	});	
</pre>

#### See Also

> [setOptions](/api/DataProvider/setOptions/)     
> [getOptions](/api/DataProvider/getOptions/)     
