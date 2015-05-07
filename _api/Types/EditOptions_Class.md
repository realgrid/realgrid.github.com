---
layout: apipost
title: EditOptions
part: Types
objectname: 
directiontype: 
permalink: /api/types/EditOptions/
---


> 그리드에서 사용자가 데이터를 편집하는 것에 대한 설정 모델이다.

#### Properties

> **deletable**                 
> Type: boolean 
> Default: false    
> true면 사용자가 Ctrl+Del 키를 누르거나 GridView.deleteSelection()을 호출해서 현재 선택된 행을 삭제할 수 있다. deleteSelection(true) 와 같이 호출하면 deletable과 상관없이 삭제할 수 있다.  

> **deleteRowsConfirm**
> Type: boolean 
> Default: true 
> true면 사용자 삭제나 GridView.deleteSelection() 실행 시 삭제 여부를 묻는 대화 상자를 먼저 호출한다. GridView.deleteSelection(true)로 호출하면 대화 상자 표시 없이 바로 삭제한다. 

> **deleteRowsMessage** 
> Type: string 
> Default: null 
> 삭제 확인 대화 상자에 표시할 메시지를 지정한다. 지정하지 않으면 그리드 내부에 설정된 기본 메시지를 표시한다. 

> **readOnly**
> Type: boolean 
> Default: false 
> 그리드 수준에서 데이터 셀의 값을 수정할 수 있는 지를 지정한다. 각 컬럼에서 지정한 readOnly 와 이 값이 모두 false일 때 수정 가능해진다. 

> **appendable**             
> Type: boolean 
> Default: false   
> true면 그리드 마지막 행에서 사용자가  아래쪽 방향키를 통해 행 추가를 시작할 수 있다.  

> **insertable**
> Type: boolean 
> Default: false   
> true면 사용자가 Insert 키를 눌러 행 삽입을 시작할 수 있다.

> **updatable**            
> Type: boolean 
> Default: true   
> true면 데이터셀 하나를 수정해서 행 편집을 시작할 수 있다.  

> **validateOnEdited**    
> Type: boolean 
> Default: true   
> true면 셀 편집이 완료될 때 컬럼 Validation을 실행한다.  

> **validateOnExit**    
> Type: boolean 
> Default: false   
> true면 셀을 빠져나갈 때 컬럼 Validation을 실행한다.  

> **hintOnError**            
> Type: boolean 
> Default: true   
> true면 편집 중에 에러가 있는 셀에 마우스가 위치하면 에러 힌트를 툴팁으로 표시한다.   

> **commitLevel**
> Type: [ValidationLevel](/api/types/) 
> Default: ValidationLevel.IGNORE  
> 행 편집을 완료할 수 있는 최상위 [ValidationLevel](/api/types/)을 지정한다. 예를들어 ValidationLevel.NONE으로 지정하면 어떤 레벨의 에러가 하나의 셀에만 존재해도 편집을 완료할 수 없게 된다. 

> **useTabKey**             
> Type: boolean 
> Default: true  
> true면 Tab 키로 셀 이동할 수 있다.

> **enterToTab**
> Type: Boolean
> Default: false
> 셀을 편집중 enter키를 입력하면 편집을 완료하고 다음 셀로 이동한다. enterToNextRow가 true인경우에는 다은 row로 이동한다.

> **enterToNextRow**
> Type: Boolean
> Default: false
> enter키를 입력하면 다음row로 이동한다.

> **enterToEdit**
> Type: Boolean
> Default: false
> focus된 셀이 편집상태가 아닐때 enter키를 입력하면 편집상태로 변경한다. enterToNextRow가 true인경우에는 편집상태로 변경하지 않고 다음row로 이동한다.

> **forceAppend**
> Type: Boolean
> Default: false
> 

> **checkCellDiff**
> Type: Boolean
> Default: false
> 

> **checkable**               
> Type: boolean 
> Default: true  
> true면 CheckBar 셀을 마우스 클릭해서 행의 Checked 상태를 변경할 수 있다. 

> **checkDiff**               
> Type: boolean 
> Default: false 
> true면 행 편집 완료 요청 시 실제 변경된 셀이 하나라도 있어야 완료된다. 그렇지 않으면 무시된다. false면 실제 값이 변경되었는 지와 상관없이 사용자 편집 행위가 있었다면 그 행은 변경된 상태가 된다. 

> **checkCellDiff**               
> Type: boolean 
> Default: false 
> true면 셀 편집 완료 요청 시 실제 변경 값이 있어야 완료된다. 그렇지 않으면 무시된다. false면 실제 값이 변경되었는 지와 상관없이 사용자 편집 행위가 있었다면 그 행은 변경된 상태가 된다. 

> **deletableWhenEdit**
> Type: Boolean
> Default: true
> true이면 셀을 편집중인 경우 편집을 취소하고 선택된 row를 삭제한다.

> **skipReadOnly**
> Type: Boolean
> Default: false
> 

> **showCommitError**
> Type: Boolean
> Default: true
> 

> **fontName**               
> Type: String 
> Default: null
> 편집시 표시될 폰트를 지정한다.

> **fontSize**               
> Type: Number
> Default: NaN 
> 편집시 표시될 폰트의 크기를 지정한다.



