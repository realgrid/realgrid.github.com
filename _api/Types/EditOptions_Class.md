---
layout: apipost
title: EditOptions
part: Types
typename: Classes
order: EditOptions
objectname: 
directiontype: 
permalink: /api/types/EditOptions/
tags:
  - EditOptions
  - 편집옵션 
---

#### Description

 그리드에서 사용자가 데이터를 편집하는 것에 대한 설정 모델이다.

#### Properties

> **deletable**                   
> Type: boolean   
> Default: false      
> true면 사용자가 Ctrl+Del 키를 누르거나 GridView.deleteSelection()을 호출해서 현재 선택된 행을 삭제할 수 있다. deleteSelection(true) 와 같이 호출하면 deletable과 상관없이 삭제할 수 있다.    

> **deleteRowsConfirm**    
> Type: boolean   
> Default: true   
> true면 사용자 삭제나 GridView.deleteSelection() 실행 시 삭제 여부를 묻는 대화 상자를 먼저 호출한다. GridView.deleteSelection(true)로 호출하면 대화 상자 표시 없이 바로 삭제한다. 

> **confirmWhenDelete**                 
> Type: Boolean  
> Default: true   
> deleteRowsConfirm 와 같다.      

> **deleteRowsMessage**   
> Type: string   
> Default: null   
> 삭제 확인 대화 상자에 표시할 메시지를 지정한다. 지정하지 않으면 그리드 내부에 설정된 기본 메시지를 표시한다.   

> **readOnly**  
> Type: boolean   
> Default: false   
> 그리드 수준에서 데이터 셀의 값을 수정할 수 있는 지를 지정한다. 각 컬럼에서 지정한 readOnly 와 이 값이 모두 false일 때 수정 가능해진다.   

> **editable**              
> Type: boolean   
> Default: true     
> true면 그리드의 데이터들을 수정 할 수 있다. false 이면 수정 할 수 없다.   

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
> true면 그리드의 데이터들을 수정 할 수 있다. false 이면 기존 데이터는 수정할 수 없고 commit() 되기 전 새로 추가된 행만 수정 가능하다.      

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
> Type: [ValidationLevel](/api/types/ValidationLevel/)   
> Default: ValidationLevel.IGNORE    
> 행 편집을 완료할 수 있는 최상위 [ValidationLevel](/api/types/ValidationLevel/)을 지정한다. 예를들어 ValidationLevel.NONE으로 지정하면 어떤 레벨의 에러가 하나의 셀에만 존재해도 편집을 완료할 수 없게 된다.  

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
> 변경된 내용이 없어도 appending 상태에서 항상 commit 할 것인지의 여부.  

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

> **strictDiff**               
> Type: boolean   
> Default: false   
>     

> **deletableWhenEdit**  
> Type: Boolean  
> Default: true  
> true이면 셀을 편집중인 경우 편집을 취소하고 선택된 row를 삭제한다.  

> **skipReadOnly**  
> Type: Boolean  
> Default: false  
> true이면 컬럼간 이동시 readOnly 셀은 건너뛰고 다음 컬럼 셀로 이동한다.   

> **skipReadOnlyCell**  
> Type: Boolean  
> Default: false  
> true이면 한 컬럼에서 행간(Vertical 컬럼 그룹 행을 포함) 이동시 readOnly 셀은 건너뛰고 다음 행의 컬럼 셀로 이동한다.   

> **verticalMovingStep**  
> Type: [VerticalMovingStep](/api/types/VerticalMovingStep/)  
> Default: "default"  
> Vertical 컬럼 그룹의 컬럼 셀을 위나 아래로 이동시 동작 방법을 지정한다.     

> **showCommitError**  
> Type: Boolean  
> Default: true  

> **fontName**                 
> Type: String   
> Default: null    
> 편집시 표시될 폰트를 지정한다.  

> **fontSize**                 
> Type: Number  
> Default: NaN   
> 편집시 표시될 폰트의 크기를 지정한다.  

> **appendWhenExitLast**                 
> Type: Boolean  
> Default: false   
> commitWhenExitLast 가 true 일 경우 enter/tab 키로 마지막셀을 벗어날 경우 행이 추가된다.       

> **appendWhenInsertKey**                 
> Type: Boolean  
> Default: false   
> Insert 키 입력시 해당 위치에 행이 삽입되는 것이 아니라 가장 마지막행에 추가된다.       

> **commitWhenExitLast**                 
> Type: Boolean  
> Default: false   
> tab/enter 키로 마지막 셀을 벗어날 때 행 commit 한다.       

> **commitWhenNoEdit**                 
> Type: Boolean  
> Default: false   
>      

> **crossWhenExitLast**                 
> Type: Boolean  
> Default: false   
> tab/enter 키로 마지막 셀을 벗어날 때 다음 행으로 이동한다.        

> **editWhenClickFocused**                 
> Type: Boolean  
> Default: false   
> 한번 선택된 셀을 다시한번 선택하면 에디터가 표시된다.(더블 클릭이 아님)       

> **editWhenFocused**                 
> Type: Boolean  
> Default: false   
> 셀이 선택될때마다 에디터가 표시된다.      

> **forceInsert**                 
> Type: Boolean  
> Default: false   
> 변경된 내용이 없어도 Inserting 상태에서 항상 commit 할 것인지의 여부.       

> **revertable**                 
> Type: Boolean   
> Default: false    
> dataProvider.softDeleting = true 인 경우 삭제 상태인 행들을 ctrl+shift+del 키 입력시 원래 상태로 되돌리겠는지의 여부를 설정한다.     

> **showOnlyValidationMessage**                 
> Type: Boolean  
> Default: true   
>      

> **maxLengthToNextCell**                 
> Type: Boolean   
> Default: false   
> column.editor.maxLength에 지정한 자리수 만큼 입력되면 다음 셀로 이동된다.       
> editFormat이 있는 경우 보여지는 글자를 기준으로 maxLength가 체크된다. (numberEditor, dateEditor)   
> multiLine의 경우 \n과 같이 제어문자도 글자수에 포함된다.   
> editOptions.skipReadOnly가 true인경우 readOnly인 셀은 건너뛴다.   
> JS ver 1.1.20부터 지원된다.   

> **displayEmptyEditRow**                 
> Type: Boolean   
> Default: false   
> 그리드의 마지막에 항상 빈 행이 추가된다.   
> 해당 빈 행에 데이터가 입력되고 행 commit()이 발생하면 다시 빈 행이 추가된다.           
> JS ver 1.1.21부터 지원된다.   

> **invalidFormatMessage**                 
> Type: String   
> Default: "잘못된 입력 유형입니다."   
> mask에서 지정한 형태가 아닐때 표시할 오류 메시지를 지정한다.            
> JS ver 1.1.22부터 지원된다.   

> **showInvalidFormatMessage**                 
> Type: Boolean   
> Default: true    
> mask에서 지정한 형태가 아닐때 오류 메시지를 보여줄것인지를 지정한다.          
> JS ver 1.1.22부터 지원된다.  

> **innerDraggable**                 
> Type: Boolean   
> Default: false    
> Inner Drag & Drop기능 사용 여부를 지정한다.            
> JS ver 1.1.25부터 지원된다.  

> **exceptDataClickWhenButton**                 
> Type: Boolean   
> Default: false    
> true인 경우 셀 버튼 클릭 후 발생하는 이벤트인 onCellButtonClicked, onImageButtonClicked 발생후에 onDataCellClicked이벤트가 발생하지 않는다.           
> JS ver 1.1.26부터 지원된다.  

#### Examples   

<pre class="prettyprint">
gridView.setEditOptions({
    deletable: true,
    deleteRowsConfirm: true,
    deleteRowsMessage: "Are you sure?",
    insertable: true,
    appendable: true
});
</pre>

---

#### API Links
 
* [setEditOptions](/api/GridBase/setColumnHeaderOptions/)   
* [getEditOptions](/api/GridBase/getColumnHeaderOptions/) 

#### Demo Links

* [Inserting](http://demo.realgrid.com/Editing/Inserting/) 
* [Updating Rows](http://demo.realgrid.com/Editing/Updating/)  
* [Delete Rows](http://demo.realgrid.com/Editing/Deleting/) 
* [Editors](http://demo.realgrid.com/Editing/Editors/)