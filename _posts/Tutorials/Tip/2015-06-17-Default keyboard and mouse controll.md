---
layout: tutopost
title:  기본 키보드 및 마우스 동작
date:   2014-07-17 09:49:54
categories: Tutorial
course: Tip
tags:
    - 키보드
    - 마우스
    - keyboard
    - mouse
---

본 가이드에서는 사용자가 키보드 및 마우스를 사용하여 RealGrid 컨트롤과 상호 작용하는 방법에 대해 설명합니다.  

RealGrid 와의 일반적 상호 작용에는 탐색, 선택 및 편집이 있습니다. 선택 동작은 [SelectionStyle](/api/types/SelectionStyle) 속성에 의해 영향을 받습니다. 이 항목에서 설명하는 동작의 원인이 되는 기본값은 BLOCK 입니다. 이러한 값을 변경하면 설명과 다른 동작이 발생할 수도 있습니다. 편집 동작은 [editOptions](/api/types/EditOptions) 속성에 의해서 영향을 받습니다. 

###기본 키보드 동작 
 
다음 표에서는 RealGrid에 대한 기본 키보드 동작을 보여 줍니다.  
 
키 또는 키 조합 | 							설명
:-------------:|--------------------------------------------------------------------------------------------------  
  아래쪽 화살표  |   포커스를 현재 셀의 바로 아래 셀로 이동합니다. 포커스가 마지막 행에 있으면 아래쪽 화살표를 눌러도 아무런 동작도 수행되지 않습니다. <br>[appendable](/api/types/EditOptions) 속성의 값이 true 이면 새로운 행을 추가합니다.  												     
위쪽 화살표 | 포커스를 현재 셀의 바로 위 셀로 이동합니다. 포커스가 첫 번째 행에 있으면 위쪽 화살표를 눌러도 아무런 동작도 수행되지 않습니다.
왼쪽 화살표 | 포커스를 행의 이전 셀로 이동합니다. 포커스가 행의 첫 번째 셀에 있는 경우 왼쪽 화살표를 눌러도 아무런 동작도 수행되지 않습니다.					
오른쪽 화살표 |포커스를 행의 다음 셀로 이동합니다. 포커스가 행의 마지막 셀에 있는 경우 오른쪽 화살표를 눌러도 아무런 동작도 수행되지 않습니다.
Home | 포커스를 현재 행의 첫 번째 셀로 이동합니다.
End | 포커스를 현재 행의 마지막 셀로 이동합니다.
Page Down | 컬럼을 변경하지 않고 완전하게 표시되는 행 수만큼 컨트롤을 아래로 스크롤합니다. 
Page Up | 컬럼을 변경하지 않고 완전하게 표시되는 행 수만큼 컨트롤을 위로 스크롤합니다. 
TAB | 포커스를 현재 행의 다음 셀로 이동합니다. 포커스가 행의 마지막 셀에 있으면 아무런 동작을 하지 않습니다.
Shift+Tab | 포커스를 현재 행의 이전 셀로 이동합니다. 포커스가 행의 첫 번째 셀에 이미 있으면 아무런 동작을 하지 않습니다
Shift+Insert | <font color="red">TreeView관련 내용 추가 작성 중</font>
Ctrl+Home | 포커스를 컬럼을 변경하지 않고 컨트롤의 첫 번째 행으로 이동합니다.
Ctrl+End | 포커스를 컬럼을 변경하지 않고 컨트롤의 마지막 행으로 이동합니다.
Ctrl+Delete | [editOptions.deletable](/api/types/EditOptions) 속성이 true 이면 현재 행을 삭제합니다.<br> [editOptions.deleteRowsConfirm](/api/types/EditOptions) 속성이 true 이면 삭제 여부를 묻는 대화 상자를 먼저 호출 합니다. 대화 상자에 표시할 메시지는 [editOptions.deleteRowsMessage](/api/types/EditOptions) 속성으로 지정할 수 있습니다. <br> [dataProviderOptions.softDeleting](/api/types/DataProviderOptions/) 속성이 true 이면  데이터행을 실제로 삭제하지 않고 행의 상태를 [RowState.DELETED](/api/types/RowState) 나 [RowState.CREATE_AND_DELETED](/api/types/RowState) 로 변경합니다. <br> <font color="red">TreeView관련 내용 추가 작성 중</font>
Ctrl+Left | <font color="red">TreeView관련 내용 추가 작성 중</font>
Ctrl+Right | <font color="red">TreeView관련 내용 추가 작성 중</font>
Ctrl+Insert | <font color="red">TreeView관련 내용 추가 작성 중</font>
F2 | readOnly 속성이 false이면 현재 셀이 셀 편집 모드가 됩니다.
Enter | 현재 셀과 행에 대한 변경 내용을 커밋 합니다. <br>[editOptions.enterToTab](/api/types/EditOptions) 속성이 true 이면 포커스를 현재 셀의 다음 셀로 이동합니다. 포커스가 마지막 행에 있으면 변경 내용을 모두 커밋하고 포커스는 이동하지 않습니다.
Esc | 컨트롤이 편집 모드에 있으면 편집을 취소하고 해당 컨트롤의 모든 변경 내용을 되돌립니다. Cell 편집 상태에서 ESC 입력 시 Cell 편집 상태를 벗어나고 한번 더 ESC를 입력하면 Row 편집 상태를 벗어납니다.
백스페이스 | 셀을 편집할 때 커서 앞에 있는 문자를 삭제합니다. 편집 상태가 아닐 경우는 셀의 기존 값을 지우고 편집 상태로 전환합니다.
delete | 셀을 편집할 때 커서 뒤에 있는 문자를 삭제합니다. 편집 상태가 아닐 경우는 셀의 기존 값을 지우고 편집 상태로 전환합니다
insert | 포커스가 위치한 행에 새로운 행을 추가합니다. 데이타를 입력하지 않고 포커스를 이동하였을 경우 행추가는 취소됩니다.

<br>

###기본 마우스 동작  

다음 표에서는 RealGrid에 대한 기본 마우스 동작을 보여 줍니다.  
 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 마우스 동작 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 							설명
:-------------:|--------------------------------------------------------------------------------------------------  
선택되지 않은 행 클릭 | 클릭한 행을 현재 행으로 만들고 클릭한 셀을 현재 셀로 만듭니다.
현재 셀을 클릭합니다. | 현재 셀을 편집 모드로 전환합니다.
컬럼 타이틀 셀 끌기 | [GridView.DisplayOptions.columnMovable](/api/types/DisplayOptions) 속성이 True이면 컬럼이 새로운 위치에 놓여질 수 있도록 컬럼을 이동합니다.
컬럼 타이틀 구분 기호 끌기 | [GridView.DisplayOptions.columnResizable](/api/types/DisplayOptions) 속성이 true이면 컬럼의 크기가 조정됩니다.
컬럼 타이틀 구분선 두 번 클릭 | [GridView.DisplayOptions.columnResizable](/api/types/DisplayOptions) 속성이 true인 경우 Auto 크기 조정 모드를 사용하여 컬럼의 크기를 자동으로 조정합니다.
컬럼 타이틀 셀 클릭 | [GridView.sortingOptions.enabled](/api/types/SortingOptions) 속성이 true이면 컬럼을 정렬합니다. <br>이미 정렬된 컬럼의 타이틀을 클릭하면 해당 컬럼의 정렬 방향이 바뀝니다.<br>[GridView.sortingOptions.style](/api/types/SortingOptions) 속성이 INCLUSIVE 이면 처음으로 클릭한 컬럼을 우선으로 순서대로 컬럼을 정렬합니다.  REVERS 이면 마지막으로 클릭한 컬럼을 우선으로 순서대로 정렬합니다.
Shift+셀 클릭 | [SelectionStyle](/api/types/SelectionStyle) 가 BLOCK으로 설정되어 있으면 연속된 여러 셀 선택 영역이 수정됩니다.
행 그룹 해더을 클릭합니다. | 그룹을 확장하거나 축소합니다.

<br>

###마우스 선택

[SelectionStyle](/api/types/SelectionStyle) 속성이 ROWS로 설정되어 있는 경우, Shift 키를 누른 채 행을 클릭하면 여러 행 선택 영역이 수정됩니다.
Shift 키를 누른 채 행을 클릭하면 클릭하기 전의 현재 행 위치에 있는 앵커 행과 현재 행 사이의 모든 행이 선택 영역에 포함됩니다. [SelectionStyle](/api/types/SelectionStyle) 속성이 BLOCK으로 설정되어 있는 경우 마우스 왼쪽 버튼을 누른 상태에서 마우스 커서를 이동하면 이동한 방향으로 셀 선택 영역이 늘어 납니다.

###참고 항목

[Selecting Demo](http://demo.realgrid.com/GridComponent/Selecting/)  
[ColumnProperties Demo](http://demo.realgrid.com/Columns/ColumnProperties/)  
[ColumnMoving Demo](http://demo.realgrid.com/Columns/ColumnMoving)  
[ColumnResizing Demo](http://demo.realgrid.com/Columns/ColumnResizing/)  
[ColumnSorting Demo](http://demo.realgrid.com/Columns/ColumnSorting/)  
[ColumnGrouping Demo](http://demo.realgrid.com/Columns/ColumnGrouping/)  
[RowGrouping Demo](http://demo.realgrid.com/RowGroup/RowGrouping/)  
[Deleting Demo](http://demo.realgrid.com/Editing/Deleting/)  

