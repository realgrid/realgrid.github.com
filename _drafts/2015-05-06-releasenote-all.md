---
layout: post
title: 새로운 강좌글 작성 템플릿
date: 2015-04-25 15:47:54 +9:00 GMT
categories: article
---

Version 1.1.22.2568 - 2015/01/29

*   product용 swf파일과 evaluation license, evaluation용 swf파일과 product license를 잘못 사용하는 경우 사용이 불가능하도록 제한("Invalid licence type")
*   product버전의 About dialog에서 "Unauthorized product !"라고 표시되는 문제 개선
*   readOnly Cell에서 그리드 외부의 control로 focus가 이동할 때 IME가 활성화되지 않는 경우를 위해 **RealGrids.resetIme()**와 **RealGrids.enableImeOnExit(reset)** 추가. **reset** parameter 값이 true이면 외부 control에 마우스 클릭할 때 RealGrid 자체 click callback에서 resetIme를 호출
*   **GroupingOptions.fixMergedColumns** 속성 추가(기본값은 true). true 이면 merged row grouping 된 컬럼은 이동이나 다른컬럼을 그 위치로 이동이 불가
*   Excel저장시 첫행에 문서 타이틀을 지정할 수 있는 **GridExportOptions.documentTitle** 속성 추가, 문자열 또는 Object 형태로 지정이 가능, Object의 경우 **text** 속성에 문자열을 지정하고 **styles** 속성에 Cell Styles를 지정.  
     [Export To Excel file](/Demo/ExportToExcel) 페이지를 참조.
*   **DataProvider.datetimeFormat**에 월과 일의 값에서 앞자리 0를 생략할 수 있는 패턴 추가. [DataType](/Demo/DataType) 페이지를 참조.
*   Column Layout기능과 관련 기능 추가및 개선  
     **GridBase.restoreColumns()**에 **restoreSize** parameter 추가(기본값은 true). true이면 원 컬럼Set에 지정되어 있던 너비로 재지정 가능.  
     layout 저장시 사용되는 **getDisplayColumns()**를 대신 할 **saveColumnLayout()** 추가.  
     그 외 Layout설정시 Group header 누락되는 문제, 저장 후 복원 시 내부 컬럼 크기가 잘못되는 문제, 복원시 내부 컬럼이 표시되지 않는 문제등 개선
*   columnFilter에 **hidden** 속성이 추가되고 hidden이 true일 때 Filter List에 표시하지 않도록 개선. 또한 filterAction이 1개이고 filter가 없거나 모두 hidden일 때 filterList를 표시하지 않고 바로 onFilterActionClicked callback을 호출.
*   **GridBase.searchItem()**에서 **startItem**이 itemCount 이상이고, **wrap**이 true일 때, 처음부터 다시 찾도록 개선. **partialMatch**가 true일 때, 빈문자열이 검색 되지 않도록 개선
*   **LocalDataProvider.setXmlRows(source, rowElement, start, count)** 함수 추가
*   **LocalDataProvider.addRow()** 호출 시 추가된 dataRow(실패 시 -1)를 return하도록 개선.
*   **GridBase.setStyles**호출 시 checkBar.figureBackground 속성이 있을 때 오류 발생하는 문제 개선.
*   컬럼 생성 시 Column.height 속성이 전달되지 않는 문제 개선.
*   **GridBase.setCheckableExpression()** 호출시 expression이 null일 때 발생하는 오류 해결.
*   number field의 값이 null이나 undefined일 때 엑셀 Export시 NaN으로 저장되는 문제 개선.

Version 1.1.21.2542 - 2014/12/02

*   search Editor 추가. 이와 관련 **onEditSearch**콜백과 **fillEditSearchItems** 함수 추가. [Editors](/Demo/Editors) 페이지를 참조.
*   외부의 Mouse Wheel 이벤트를 전달하는 **RealGrids.setExternalWheelEvents** 함수 추가.  
     [External Wheel](/Demo/ExternalWheel) 페이지를 참조.
*   **expandAll**에서 특정 level까지만 확장이 가능한 **level**매개변수 추가, level이 1이상이면 해당 레벨의 자식까지 확장.
*   ShapeCellRenderer에서 figureName에 "star" 추가, iconLocation을 "center"로 지정 할 수 있도록 개선.
*   checkBar의 all영역의 check를 api로 설정하는 **setAllCheck**함수와 check를 확인할 수 있는 **isAllChecked**함수 추가.
*   Shift키나 Ctrl키를 눌렀을 때 Scroll이 현재 Focus셀 위치로 이동하는 현상을 이동하지 않도록 수정.
*   dataType이 "text"인 컬럼에서 date editor를 사용할 때, Cell 값을 지우면 원래대로 돌아가는 현상을 undefined로 유지하도록 수정.
*   checkAll 함수 실행할 때 checked = false, checkableOnly = true일 때 checkable이 false인 행도 check가 해제되는 문제 해결.
*   **GridExportOptions.lookupDisplay**가 true일 때 감춰진 행의 label이 출력되지 않는 문제 해결.
*   **CheckBarOptions.exclusive**가 true일 때 편집중인 행을 check후 다른 행 check시 편집중인 행의 check가 해제되지 않는 문제 해결.
*   Filter, Validation, Style등의 Expression에서 끝에 공백이 존재하면 다른 속성의 수식이 잘못되는 문제 해결.
*   ShapeCellRenderer에서 값이 없는(undefined) 셀이 Scroll후 오기되는 문제 해결.
*   **setColumnFilters**나 **orderBy**호출 시 컬럼 헤더에 Icon과 Text가 겹쳐서 표시되는 현상 수정.
*   column.**getColumnProperty**, **setColumnProperty**에서 prop가 "popupMenu"일 때 오류 해결.

Version 1.1.20.2533 - 2014/11/06

*   셀의 텍스트와 아이콘을 HyperLink형태로 표시하는 LinkCellRenderer 추가, Link클릭시 발생하는 **onLinkableCellClicked** 이벤트 추가. [LinkCellRenderer](/Demo/LinkCellRenderer) 페이지를 참조.
*   체크시 필터가 되는 ColumnFilter와 달리 팝업등 부가적인 행동를 할 수 있는 ColumnFilterAction 추가, 클릭시 발생하는 **onFilterActionClicked** 이벤트 추가 [ColumnFiltering](/Demo/ColumnFiltering) 페이지를 참조.
*   **getDistinctValues** 함수 추가, 특정 필드의 전체 값을 순차 정렬하여 지정된 갯수만큼을 반환
*   **PasteOptions.enabled** 속성 추가, enabled가 false일 때 클립보드에 복사한 값을 그리드에 붙여넣기 불가.
*   CheckBarOptions.exclusive가 true일때 checkable이 false인 경우 표시되지 않던 문제가 개선되었습니다.

Version 1.1.19 - 2014/10/24

*   **GridExportOptions.lookupDisplay**를 추가, 이 값이 true일 때 dropDown 에디터나 labelField를 사용한경우 표시된 값을 엑셀로 저장
*   selection을 script로 제어하도록 **GridBase.clearSelection()**, **GridBase.setSelection()** 추가.
*   **CopyOptions.enabled**를 추가, enabled가 false이면 에디터가 아닌 상태에서의 복사가 불가능(기본값은 true).
*   하나이상의 셀을 붙여넣을 때 발생하는 **GridView.onEditRowPasted** 이벤트 추가.
*   현재 보여지는 컬럼및 그룹 배치 정보를 반환하는 **GridBase.getDisplayColumns()** 함수 추가.
*   **GridBase.setColumnLayout**함수에 Column Group과 그에 포함된 Column을 지정할 수 있도록 개선.
*   ColumnGroup의 hideChildHeaders가 true일 때 엑셀 Export 오작동 문제 개선
*   엑셀 Export시 일부 datetime Field의 날짜가 1 감소하여 엑셀로 저장되는 오류 해결
*   checkable이 false일 때 checkAll버튼 클릭시 check되는 문제 개선.
*   checkableExpression을 지정했을 때 setValue에 의해 값이 바뀔 경우 checkable이 갱신되지 않는 문제 개선
*   fixedRows가 1이상이고 Row Grouping한 상태에서 checkAll클릭시 fixed행들이 check되지 않는 문제 개선
*   편집중인 행에서 하나 이상의 컬럼에 붙여넣기할 때 client is editing 에러가 발생하는 문제 해결
*   TreeView에서 editing중인 행을 getValues로 가져오면 에러 발생하는 문제 해결
*   **TreeView.getEditingItem**을 호출했을때 반환되는 값에 values가 포함되지 않는 현상 개선
*   TreeView.setValues가 작동하지 않는 문제 개선.
*   GridBase.setColumn을 호출하여 visible을 변경했을때 에러 발생하는 문제 해결
*   GridBase.getColumnProperty에서 footer값을 가져왔을 때 에러 발생하는 문제 해결
*   **TreeDataProvider에서 savePoint** 호출 시 화면상에 데이터가 추가로 표시되는 문제 개선
*   **GridView.setCellStyle**을 호출했을때 화면이 refresh 되지 않는 문제 개선
*   SelectionStyle이 rows이고 onCurrentChanging에서 false를 반환했을 때 focus를 이동하면 focus는 그대로 있으나 selection만 이동하는 문제 개선

Version 1.1.18 - 2014/10/08

*   **DisplayOptions.parentChangable**을 true로 지정하여 Drag and drop으로 이동하여 컬럼의 부모를 변경 가능. (단, 그룹내에 하나의 컬럼만 있는 경우 이동 불가) [Column Moving](/Demo/ColumnMoving) 페이지를 참조.
*   컬럼 필터의 expression에 다른 컬럼와의 비교를 위해 values 변수 추가. [Column Filtering](/Demo/ColumnFiltering) 페이지를 참조.
*   CheckBar의 행별 checkable 제어를 위해 **isCheckable**, **setCheckable**함수 추가. 수식에 의해 checkable을 제어하기 위해 **CheckBarOptions.checkableExpression** 속성과 **applyCheckables**, **setCheckableExpression**, **resetCheckables**함수 추가. [CheckBar](/Demo/CheckBar) 페이지를 참조.
*   csv 데이터의 필드 구분자를 지정할 수 있는 **DataLoadOptions.delimiter**속성 추가. ("|" "\t"등, 기본값은 ",")
*   **FilterOptions.selector.showAll**속성으로 컬럼 필터의 All Filter 표시여부를 결정하도록 개선.
*   **GridBase.addColumnFilters**함수의 **overwrite** 매개변수를 true로 주었을 때 기존 정의된 동일 이름의 filter가 재정의되지 않는 문제 해결
*   xml data load시 boolean field의 값이 없을때 기본 true로 불러왔던 문제 해결
*   saveExcel을 여러번 호출하면 Confirm Dialog가 여러번 뜨던 문제 해결. 현재 dialog가 떠 있는지 확인하기 위한 **isLocalExporting** 함수와 dialog를 강제로 가운데로 이동시키는 **centerLocalExporting**함수 추가.
*   **GridBase.commit**함수에서 성공여부를 반환하도록 수정.
*   **GridBase.getItemState**에서 focus 상태의 itemIndex로 호출해도 "normal"로 반환되는 문제를 정상적으로 "focused"를 반환하도록 개선.
*   TreeView에서 editOptions.enterToTab 이 true일 때 readOnly 컬럼에서 enter키 입력시 다음 셀로 이동하지 않는 문제 해결.
*   TreeView에서 options.summaryMode 가 statistical일 때 var등의 분산, 표준편차 값이 계산되지 않는 문제 해결.
*   DataProvider.onLoadCompleted, onLoadFailed callback이 발생하지 않는 문제 해결.

Version 1.1.17 - 2014/09/12

*   Model정보 가져오는 함수들에 extended 매개변수 추가, extended가 true이면 level, childIndex등의 계층정보 추가 [Item Model API](/Demo/ItemModelApi) 페이지 참조.
*   컬럼 우측 경계 더블클릭하면 Column 크기를 Data에 맞추는 기능과 동일한 **fitColumnWidth** 함수 추가  
     column매개변수에 Column Group 또는 DataColumn에 해당하는 object나 name을 전달할 수 있습니다.
*   TreeDataProvider에 편집 관련 **addTreeDataRow**, **insertTreeDataRow**, **removeRows** 함수 추가
*   GridBase에 현재 Selection된 행을 알 수 있는 **getSelectedRows**, **getSelectedItems** 함수 추가
*   TreeView에서 자식 행의 건수를 가져오는 **getChildCount**와 모든 자손 행의 건수를 가져오는 **getDescendantCount** 함수 추가
*   GridBase.CheckBarOptions에 전체선택 여부 showAll, Group Row의 Check 여부 showGroup 옵션 추가, 기본은 true
*   TreeView에서 softDeleting일 때 부모 행을 삭제시 자식 행이 같이 삭제 되도록 하는 DataProvider.Options.changeDescendants 옵션 추가
*   TreeView에서 자식 행을 가져오는 **getChildren**등의 함수와 addTreeDataRow, insertTreeDataRow의 함수에서 **rowId**를 -1(보이지 않는 최상위 Level Row)로 지정할 수 있도록 개선 [TreeView DataModel](/Demo/TreeDataModel) 페이지 참조.
*   setCurrent함수에서 selected 매개변수 추가, selected가 false일 때 selection이 해제되지 않도록 개선
*   checkRow 호출 시, 보이지 않는 행의 경우 check가 변경되지 않는 문제 해결
*   TreeView에서 icon이 없을 때 하위 Level Row과의 연결선이 제대로 그려지지 않는 문제 해결
*   TreeView에서 **getSelectionData** 호출하면 빈 Array전달되는 문제 해결
*   GridBase.**getSelectionData** 호출 시 초기 컬럼 설정에 따른 Data가 반환되던 문제 해결
*   DisplayOptions.**fitStyle**을 evenFill로 했다가 none으로 변경했을 때 그룹내 컬럼크기 변경 시 마지막 컬럼의 크기가 변경되던 문제 해결
*   TreeView에서 hideDeletedRows가 true이고 softDeleting이 true일 때 삭제된 row가 화면상에서 사라지지 않는 문제 해결
*   초기 load시 visible이 false였던 컬럼을 visible을 true로 설정할 때 style이 적용되지 않는 문제 해결
*   SelectionStyle.Rows 이고 Fixed.rowCount가 0보다 클 때 선택행이 고정행에 포함될 때 잘못 처리되는 문제 해결
*   컬럼 이동 시 Visible False인 컬럼이 있을 경우 발생하는 오류 수정
*   TreeView에서 softDeleting이 true일 때 clearRowStates(true)을 실행해도 삭제된 Row가 제거되지 않는 문제 해결

Version 1.1.16 - 2014/08/22

*   셀에 지정된 DataCellStyle id 가져오는 getCellStyle 함수 추가
*   DataProvider.loadData에서 params에 문자열 값을 지정하면 FormData가 아니라 ContentString으로 전달하도록 기능 추가
*   RealGrids.SortDirection.**DSCENDING**을 RealGrids.SortDirection.**DESCENDING**으로 변경
*   Column Grouping이 horizental일 때 Excel Export 시 발생하는 오류 수정
*   checkBar header 클릭하여 전체 선택 해제 시 onItemAllChecked 이벤트에서 checked true로 전달되는 오류 수정
*   column.readOnly나 cellStyle.readOnly가 true일 때 CheckCellRender에서 클릭으로 값을 변경하지 못하도록 수정
*   DataProvider.setIconIndex 호출 시 새로 고쳐지지 않는 오류 수정
*   TreeView Footer 계산 오류 수정
*   Column.Styles.textWrap 속성이 동작하지 않는 오류 수정
*   LocalDataProvider.setJsonRows함수의 start, count argumnet가 동작하지 않는 오류 수정
*   TreeView내 복사한 셀이 붙여넣기가 되지 않는 오류 수정
*   TreeView 컬럼 이동이 안되는 문제 수정
*   LookupDisplay가 true인 컬럼을 MergedRowGrouping할 경우 오류 발생하는 현상 수정

Version 1.1.15 - 2014/07/18

*   TreeDataProvider 관련 함수들 공개. TreeView 편집 기능 소개. [TreeView Editing](/Demo/TreeEditing) 페이지 참조.
*   컬럼 필터 관련 함수들 공개. [Column Filtering](/Demo/ColumnFiltering) 페이지 참조.
*   Editor 폰트 설정 가능. 그리드 editOptions의 **fontName**, **fontSize** 속성 추가. 각 컬럼의 editor 설정에도 동일 속성 추가. 컬럼 editor 속성이 우선.
*   onCellCommit(), onEditRowChanged() 이벤트 추가. [Editors](/Demo/Editors) 페이지의 더보기 내용 반드시 참조.
*   컬럼 및 행 동적스타일에 **count** 변수 추가. 트리에서 자식 행의 개수를 리턴. [Set Array DataSet](/Demo/TreeSetArrayData) 페이지 참조.
*   컬럼에 지정된 필터들 중 acitve 된 것이 없는 경우 필터 핸들 내부를 비운 상태로 표시.
*   FilteringOptions의 **handleVisibility** 속성으로 헤더셀이 hovering 됐을 때만 핸들이 표시되도록 할 수 있음.
*   DisplayOptions에 maxHeight 속성 추가.
*   checkBar 에 **visibleOnly** 속성 추가. rowgrouping 상태이거나 treeView 일 때 checkBar의 all 부분을 클릭하면 표시된 행들에 대해서만 적용할 지 여부를 지정. 기본값은 false.
*   Datetime 필드가 포함된 inclusive 정렬 문제 개선.
*   TreeView의 getAncestors, getDescendants 함수 미동작 개선.
*   CheckBar가 exclusive일 때 감춰진 행의 checked 가 해제되지 않는 문제 개선.
*   한 행이 그리드 전체 높이보다 높아진 상태에서 행 이동할 수 문제 개선.
*   Item checked와 관련된 함수들을 GridView와 TreeView에서 GridBase로 이동.
*   getCheckedRows()가 숨겨진 행의 상태를 못 가져오는 문제 개선.
*   checkAll()이 숨겨진 행에 적용되지 않는 문제 개선.
*   하나의 cell만 선택된 경우 사용자 삭제 시 onRowsDeleting event 발생 시점과 매개변수 문제 개선.
*   고정 컬럼에서 필터 리스트 표시 위치 문제 개선.
*   LocalDataProvider가 softdeleting이고 deleteCreated 일때 상태가 RowState.CREATED 인 복수행 삭제시, rowEvents가 false일 때도 개별 삭제 이벤트 발생하는 문제 개선.
*   아이템 모델 함수들 공개. [Item Model Api](/Demo/ItemModelApi) 페이지 참조.
*   Row Grouping 관련 함수들 추가. [Row Grouping Api](/Demo/RowGroupingApi) 페이지 참조.
*   DataProvider에 개별 삭제 이벤트 추가. removeRow()가 호출되거나, removeRows()의 rowEvents가 true로 호출되면 onRowsDeleted 대신 onRowDelete 이벤트 발생.
*   그리드의 setCellStyles로 DataCellStyle 적용시, 컬럼 스타일이나 동적 스타일로 적용한 값들이 초기화되는 문제 개선.
*   GridBase.setGroupingOptions({enabled:false}) 가 적용되지 않는 문제 개선.
*   footer.text, footer.expression 모두 설정 안된 경우 footer 셀에 아무것도 표시되지 않도록 함. footer.groupText, footer.groupExpression 모두 설정 안된 경우 그룹 footer 셀에 아무것도 표시되지 않도록 함.
*   Row count가 0일 때 footer에 아무것도 표시되지 않도록 개선.
*   DataProvider.setFields() 호출 시 기존 데이터가 남아 있는 문제 개선. loadData()나 setRows() 등 DataProvider에 **데이터를 추가하기 전에 반드시 setFields()로 필드가 구성돼야 함.**
*   TreeDataProvider.clearRowStates() 오류 개선.
*   Boolean 필드에도 undefined값은 undefined로 저장. 셀에디터의 **emptyValue** 속성에 빈문자열이 입력될 때 저장될 Boolean값을 지정 가능. <span style="color:blue">지정하지 않으면 undefined로 저장.</span>. 또한, 스타일의 **booleanFormat** 속성에 지정할 포맷의 세번째 마디에 undefined일 경우 표시될 문자열을 지정할 수 있음. 지정하지 않으면 빈문자열로 표시. [Data Type](/Demo/DataType) 페이지와 [Boolean Field](/Demo/BooleanField) 페이지를 참조.

Version 1.1.14 - 2014/07/09

*   DataCellStyle이 DataProvider 변경과 동기화 되도록 변경. 즉, 행(들)이 삭제되면 해당 행의 DataCellStyle이 삭제되고, 나머지 행들과 DataCellStyle의 위치를 맞추도록 함.
*   LocalDataProvider.setRows(data, start, count)에서 count가 data에 포함된 행의 개수를 벗어나게 해도, data에 들어 있는 만큼의 행들만 저장하도록 변경.
*   TreeView line 렌더링 개선.
*   TreeDataProvider.getAncestor()에서 마지막 -1(root)이 포함되는 문제 개선. [Tree DataModel](/Demo/TreeDataModel) 페이지 확인.
*   병합모드 row grouping 마지막 행이 잘못 표시되는 문제 개선.
*   병합모드 row grouping에서 expander를 감출 수 있도록 RowGroupOptions.mergeExpander 속성 추가. [Merged Row Grouping](/Demo/RowGroupMerging) 페이지 확인.
*   GridBase.setValues(itemIndex, values, strict)로 strict 매개변수 추가, true로 지정하면 내부적으로 DataProvider.updateRow 대신 updateStrictRow 호출. 즉, 지정한 필드값만 변경. 편집 중인 행인 경우 dataProvider를 변경하지 않고, 편집 값들을 변경.
*   Row grouping일 때 GridBase.searchItem() 실패 개선.
*   GridView.mouseToIndex()로 Column 그룹의 하위 컬럼을 찾지 못하는 문제 개선.

Version 1.1.13 - 2014/07/03

*   그리드가 처음 로드될 때, 첫번째 셀에 포커스가 가도록 개선. 이 후, 첫번째 셀로 포커스를 이동 시키고 싶은 경우 GridBase.**resetCurrent()** 호출.
*   편집 중인 행에 대해 GridBase.getValues(itemIndex)를 호출하면 데이터 행이 아니라 편집 Item의 값들을 가져오도록 변경.
*   그리드 body.**rowStylesFirst**를 true로 지정하면, body.dynamicStyles가 column.styles 보다 먼저 적용되도록 개선. [Dynamic Styles on Rows](/Demo/DynamicStylesRow) 페이지 참조.
*   그리드 getValue(field) 함수 field 인자에 필드명을 지정 가능.
*   [Icon 셀렌더러](/Demo/IconCellRenderer)에서 텍스트를 표시하지 않도록 하는 옵션 추가. **iconLocation** 스타일 속성 값을 "center"로 하거나, 셀렌더러의 **textVisible**을 false로 지정하면 됨.
*   컬럼그룹에 포함된 컬럼들도 병합 모드가 아닐 때는 row grouping 가능하도록 개선.
*   Column.footer.styles 외에 Column.footer.groupStyles 에 컬럼별 RowGroup footer의 스타일을 추가 지정할 수 있도록 함.
*   LocalDataProvider.setRowCount(newCount, fillFieldDefaults, defaultValues, rowState) 함수 관련 문제를 개선. fillFieldDefaults가 true면 각 필드의 default 값으로 채움. defaultValues가 배열이거나 json 객체이면 그 값으로 채움. rowState로 새로 생성될 행의 상태값 지정 가능. 기본값은 "none".  
     setRowCount()로 빈 행들을 생성하고, 바로 setValue()를 호출하면 값이 저장되지 않는 문제 개선. [Set RowCount](/Demo/RowCount) 페이지를 확인하십시오.
*   컬럼 헤더셀의 너비가 좁아질 때 Sorting, Filtering 핸들이 다른 헤더셀로 넘어가 표시하는 문제 개선.
*   DataProvider.removeRows에서 onRowStatesChanged 가 변경된 행이 없어도 발생하던 문제 개선.
*   DataProvider.updateRows나 updateStrictRows 후 onRowStatesChanged 이벤트 가 발생 안하던 문제 개선.
*   DataProvider.clearRowStates 호출 후 onRowStatesCleared 이벤트가 발생 안하던 문제 개선.
*   DataCell을 클릭할 때만 onDataCellDblClicked 이벤트가 발생하도록 개선.
*   그리드 onCellEdited 이벤트 내에서 그리드 commit()을 호출하고 바로 스크롤하면, 데이터셀이 변경된 값을 표현하지 못하던 문제 개선.

Version 1.1.12 - 2014/06/30

*   이전 릴리즈 중 그리드가 DataProvider의 client로 등록되는 루틴에 문제 포함. client가 편집 중일 때 DataProvider에 변경이 생기면 **"Client is editing" 에러**가 발생해야 함.  
     <span style="color:Red">DataProvider 함수들을 직접 호출해서 데이터를 변경할 때는, 반드시 먼저 그리드의 **commit()**이나 **cancel()**를 호출해서 편집을 먼저 완료해야 함.</span> [Set Values](/Demo/SetValues) 페이지 확인. [Add Data Row](/Demo/AddDataRow) 등에서 편집 중 데이터 변경 테스트.
*   입력 값의 범위에 제한을 줄 수 있는 [Subtype](/Demo/Subtypes) 개념 및 구현 추가.
*   GridView.groupBy(null)이나 groupBy([]) 로 호출하면 row 그룹핑 해제.
*   그리드의 setColumn() 함수로 현재 포커스를 가진 셀 컬럼의 **readOnly**, **editable**을 변경할 수 있도록 개선.
*   그리드의 fitStyle이 "none"이 아닐 때 **setColumn()** 호출하면 해당 컬럼의 너비가 조금씩 줄어드는 문제 개선.
*   그리드의 fitStyle이 "none"이 아닐 때 RowGroup header의 너비가 fit 되지 않는 문제 개선.
*   [컬럼 vaildation](/Demo/EditColumnValidation) 에러 힌트 표시가 오른쪽이나 아래쪽으로 넘치는 문제 개선.
*   고정 컬럼이 존재할 때 수평 스크롤바 track 영역을 클릭하면 발생하는 에러 개선.
*   수평 스크롤바 track 영역을 클릭하면 한 컬럼씩 스크롤 되도록 개선.
*   [TreeView export](/Demo/ExcelTreeView) 시 표시되는 컬럼 수가 트리 level 보다 적으면 발생하는 에러 개선.
*   DropDown 편집기와 Date 편집기에 **dropDownWidth** 및 **dropDownPosition** 속성 추가. [Editors](/Demo/Editors) 페이지 참조.
*   필드의 합계값을 가져올 수 있는 GridBase.**getSummary(field, summary)** 함수 공개. field는 필드명이나 필드인덱스가 될 수 있음. value는 "min", "max", "sum", "avg" 등의 값이 될 수 있음. [Column Footer](/Demo/ColumnFooter) 페이지 참조.
*   Flash 보안 상의 이유로 Flash object 외부에서 발생된 마우스 클릭 이벤트가 그리드에 전달되지 않음. 따라서 그리드 Dropdown 편집기나 Date 편집기의 리스트가 펼쳐진 상태에서 그리드 외부를 마우스 클릭하면, 리스트가 닫히지 않은 상태로 남게 됨.  
     언제든 그리드 내부를 클릭하거나 esc 키 등을 누르면 바로 닫히게 되므로 대개의 경우 문제가 없다고 여겨지지만, 문제라고 판단 될 수 있는 경우를 위해 편집기 리스트를 강제로 닫게하는 GridBase.**closeList()** 함수를 추가하고, **realgridplus.js**에 전역 **"mousedown"** 이벤트 핸들러를 등록. 이 핸들러는 클릭 위치를 계산해서 그리드 위치가 아니거나 클릭된 그리드를 제외한 다른 그리드의 리스트를 GridBase.**closeList** 함수를 호출해서 닫히게 함.  
     다만 이 핸들러는 전역 핸들러이므로 당연히 grid flash object에도 영향을 줄 수 있는데, <span style="color:Blue">만일 특정 상황에서 마우스 클릭으로 DropDown 편집기나 Date 편집기의 리스트가 펼쳐지지 않는다면, 이 핸들러가 그리드 위치를 제대로 판단하지 못하고 마우스 이벤트를 capture 해 간 것이므로 핸들러 등록을 취소하고, 우리테크에 바로 공지 요망.</span>

Version 1.1.11 - 2014/06/23

*   GroupingOptions.**linear** 속성 추가. true로 지정하면 그룹핑 컬럼들을 일렬로 배치. [RowGrouping](/Demo/RowGrouping) 페이지를 참조.
*   TreeView에서 Expand/Collapse 시 기존 focus index가 가능한 유지되도록 개선. Focus를 갖는 행이 collapse될 때는 표시되는 가장 근접한 조상 아이템으로 포커스 이동.
*   Excle export 시 RowGroup footer 값이 표시되지 않는 문제 개선.
*   fitStyle이 적용됐을 때 ColumnGroup에 포함된 컬럼들의 너비가 고르게 반영되지 않는 문제 개선.
*   Data load option에 count와 filter가 모두 존재할 때, count만큼 가져오지 못하는 문제 개선.
*   행이 존재하지 않는 빈 그리드에 Row grouping을 실행할 때 전후로 발생하는 문제 개선.

Version 1.1.10 - 2014/06/19

*   [Number 편집기에](/Demo/Editors) **positiveOnly** 및 **integerOnly** 속성 추가. positveOnly이면 "-" 키 입력 불가. integerOnly면 ".", "e", "E" 키 입력 불가.
*   Dropdown 및 Date 편집기 표시와 관련된 문제점들을 개선.  
     Dropdown 리스트의 너비가 최소한 리스트 항목들을 모두 표시할 수 있는 정도가 되게 함.  
     리스트가 최우측 컬럼에 표시될 때 그리드 영역을 넘어가지 않도록 함.  

*   추가 중인 행에서 Dropdown및 Date 편집기 버튼이 동작하지 않은 문제 개선.
*   [Shape 셀 renderer](/Demo/ShapeCellRenderer)에서 shape 표시 위치 문제를 개선.

Version 1.1.9 - 2014/06/16

*   [Expression 개요](/Demo/ExpressionConcept) 페이지가 정리됐습니다. 수식에서 실행 시간 변수나 Indexer로 len, lenb를 사용하는 대신, **연산자 len, lenb 를 사용해야 합니다.**  
     실행 시간 변수 len, lenb는 동작하지 않습니다. 즉,  
     **"len > 3" 대신 "len value > 3" 나 "len(value) > 3" 으로 사용**해야 합니다. **lenb**도 동일합니다.
*   행 편집 중 셀편집 완료와 동시에 좌우 스크롤되는 경우 편집된 셀에 기존 데이터가 표시되는 문제 개선.
*   병합모드 Row grouping 중 collapsed된 첫번째 행의 셀을 표시하지 못하는 문제 개선.
*   컬럼이나 행 그룹의 합계 expression 변수 중 **min**, **max**, **stdev** 값이 잘못 표시되는 문제 개선.
*   컬럼이나 행 그룹의 합계 expression 변수 중 var/stdev 값을 var/varp 및 stdev/stdevp 로 구분해서 사용할 수 있도록 함.  
     모집단 분산이 필요하다면 **기존에 수식에 적용된 stdev는 stdevp로, var는 varp로 변경해야 함.** [Expression 개요](/Demo/ExpressionConcept) 참조.
*   컬럼 셀 동적 스타일에서 **value** 및 **values** 로 다른 필드값을 참조할 수 있도록 함. [Expression 개요](/Demo/ExpressionConcept) 참조.
*   그리드 **edit** 옵션의 **skipReadOnly** 속성을 true로 지정하면 readOnly이거나 editable이 false인 컬럼은 키보드로 셀을 이동할 때 건너뛰도록 함.

Version 1.1.8 - 2014/06/12

*   **renderer** 스타일 속성 추가. 이 속성을 이용해서 한 컬럼에 둘 이상의 셀renderer를 지정할 수 있도록 함. [Renderer with Styles](/Demo/RendererWithStyles) 페이지 참조.
*   TreeView 엑셀 내보내기 개선. [Export - TreeView](/Demo/ExcelTreeView) 페이지 참조.
*   날짜 편집기의 datatimeFormat에 "**yyyyMMdd**"와 같이 구분자 없는 연속 포맷을 지정할 수 있도록 개선. [Data Type](/Demo/DataType) 페이지 참조.
*   그리드의 **setCellStyleRows**을 이용해서 [DataCellStyle](/Demo/DataCellStyleRows)을 일괄 적용할 수 있도록 함.
*   그리드의 setCellStyle/setCellStyles의 dataRow에 -1을 지정하면 추가 중인 행의 셀들에 반영되도록 함.
*   그리드의 editOptions.**enterToNextRow** 속성 추가. true로 지정하면 enter 키 입력 시 다음 행으로 이동. [Data Type](/Demo/Editors) 페이지 참조.
*   스타일 속성 지정 시 속성 이름을 잘못 지정한 경우 에러 대신 무시하도록 개선.
*   병합된 셀이 포함된 행을 편집할 때 병합셀들을 구분해서 표시하도록 개선.
*   한 줄짜리 텍스트를 표시하는 셀에서 좌우 padding이 반영되지 않는 문제 개선. (* 개선 전처럼 padding 없이 표시하기를 원하는 경우 컬럼 styles에 paddingLeft, paddingRight를 0으로 지정해야 함).
*   Footer 셀의 텍스트가 셀 너비보다 긴 경우 좌우 셀로 넘치는 문제 개선.
*   컬럼그룹핑과 관련된 Copy/Paste 문제 개선.

Version 1.1.7 - 2014/06/03

*   Block Copy/Paste 구현. Excel 텍스트 클립보드 포맷을 기반으로 동작. copyOptions, pasteOptions 를 통해 다양한 설정 지원. [Copy & Paste](/Demo/CopyAndPaste) 페이지 참조.
*   Row Grouping Header의 문자열에 지정할 수 있는 변수 추가. [Row Grouping](/Demo/RowGrouping) 페이지 참조.
*   softDelete된 데이터행을 Grid Item 목록에서 제외시킬 수 있는 그리드**hideDeletedRows** 속성 추가. 기본값은 false. [Deleting](/Demo/Deleting) 페이지 참조.
*   DataField.**header** 속성 추가. 이 값을 RowGroup header 등에서 사용할 수 있음.
*   Indicator cell을 클릭했을 때 행이 선택되지 않도록 하는 Indicator.**selectable** 옵션 추가. [Indicator](/Demo/Indicator) 페이지 참조.
*   EditOptions.**validateOnExit**를 true로 하면 편집하지 않은 경우에도 셀을 벗어날 때 Column Validation이 실행됨.
*   DataProvider에 getValue, setValue 함수 추가. [Get Values](/Demo/GetValues) 페이지 추가.
*   DataProvider에 한 필드의 여러행 값을 가져오는 getFieldValues 함수 추가. [Get Values](/Demo/GetValues) 페이지 추가.
*   그리드 내부에서 표시하던 Validation 에러 등을 javascript excpetion으로 throw 하도록 변경하였습니다.
*   데이터셀의 포커스 이동을 셀 단위로 변경.
*   TreeView에서 불필요한 Line이 그려지는 문제 수정.
*   Number editor 에서 '-' 키 입력 문제 및 값에 콤마(,)가 포함된 경우 값 처리 문제 수정.
*   한글 입력중 좌우 방향, TAB, ENTER 키를 입력하면 바로 이동이 안되는 문제 개선.
*   CheckBar.exclusive가 true일 때 선택된 행을 클릭시 선택이 해제되지 않도록 개선.
*   사용자가 number/datatime/boolean 필드셀에서 빈 문자열을 입력하면 기존 값이 null, NaN이 아닌 경우 undefined로 값이 저장되도록 개선.
*   행 추가 시에는 상태 변경 이벤트(onRowStateChanged)가 발생하지 않도록 함.
*   고정 컬럼이 있을 때 fitStyle 지정 에러 개선.

Version 1.1.6 - 2014/05/17

*   GridView 아이템의 상태를 알수 있는 GridBase.**getItemState(itemIndex)** 함수 추가. 상태는 ItemState.NORMAL, FOCUSED, UPDATING, INSERTING, APPENDING 중 하나.
*   DropDown 편집기 리스트 항목의 정렬 순서를 지정하는 DropDownCellEditor.**itemSortStyle** 속성 추가. ItemSortStyle.NONE, ASCENDING, DESCENDING 중 설정 가능, 기본값은 NONE.
*   setLookup 호출 시 **ordered** 옵션을 true로 지정하면 넣은 순서대로 dropDown 리스트에 표시된다. (itemSortStyle이 NONE인 경우)
*   LookupSource 내에 조건에 해당하는 값이 이미 존재하는지 확인할 수 있는 GridBase.**existsLookupData(sourceId, keys)** 함수 추가 [Lookup Tree](/Demo/LookupTree) 페이지 참조.
*   Excel 내보내기 시 엑셀 저장 확인 대화상자 표시 옵션 ExportOptions.**showConfirm** 추가. 기본값은 true. GridBase.**exportGrid** 함수를 Javascript에서 직접 호출하는 경우에는 Flash 보안 문제로 반드시 확인 대화 상자를 먼저 표시해야 함(showConfirm=true). [Excel Overview](/Demo/ExcelOverview) 페이지 참조. 대화상자를 피하고자 한다면 [Context Menu](/Demo/ContextMenu)를 이용할 수 있음.
*   컬럼이 readOnly이거나 editable이 아닐 경우 편집기 비활성화 상태에서 클립보드 붙여넣기가 안되도록 수정
*   number 필드 셀에 NaN으로 표시하지 않도록 하는 옵션 추가
*   Column.**textInputCase** 속성 추가. 붙여넣기일 때는 컬럼의 설정을 따름. CellEditor.textCase가 DEFAULT이면 Column의 textInputCase 값을 따름. (기본이 DEFAULT)
*   데이터가 clear될 때 CheckBar 헤더의 체크를 해제하도록 수정
*   데이터가 clear될 때 Column 헤더의 current 표시를 해제하도록 수정
*   wmode=opaque인 경우 한글 IME 상태에서 readOnly 컬럼에서 입력시 다른 Element에 표기되는 오류 수정
*   Selection Style이 SINGLE_ROW일때 선택한 Cell을 다시 클릭하면 Selection이 사라지는 오류 수정
*   TreeGrid 편집중에 Tree 표시가 깨지는 오류 수정
*   LookupTree에서 조건에 해당하는 도메인이 존재하지 않을때 발생하는 오류 수정
*   리턴값이나 callback 매개변수로 backslash(\)가 전달되는 경우 발생하는 오류 수정
*   readOnly가 true이거나 editable이 false인 컬럼셀에서 Ctrl+C 복사하기가 안되는 오류 수정.

Version 1.1.5 - 2014/05/08

*   리얼그리드 에러 처리 방식이 변경. [Error Handling](/Demo/ErrorHandling) 페이지 참조.
*   object element의 **flashvars** param에 **hideLoader=true**를 추가하면 flash player의 preLoader progress bar를 표시하지 않도록 함. swfobject의 embedSWF를 사용하는 경우 flasvarsObj 매개변수에 위의 값을 추가한다.
*   TreeView의 data model 및 주요 api 개선. [TreeView Data Model](/Demo/TreeDataModel) 페이지 참조.
*   TreeView의 CheckBar 관련 개선. [TreeView CheckBar](/Demo/TreeCheckBar) 페이지 참조.
*   DataCell 단위로 스타일 및 편집 속성을 지정할 수 있도록 하는 DataCellStyle 기능 추가. [DataCellStyle 개요](/Demo/DataCellStyleConcept), [DataCellStyle 편집 속성](/Demo/DataCellStyleEditing) 페이지 참조.
*   전체 컬럼의 너비가 그리드 본체 영역보다 작을 때 자동으로 채우는 기능 추가. [컬럼들 채우기](/Demo/GridFitting) 페이지 참조.
*   DataProvider.**getRowStateCount(states)** 함수 추가. **states**는 **["created", "updated"]**, **"craete"**, 혹은 **"none"**을 제외한 전체 상태를 가져오는 **"*"**로 지정할 수 있다. [Row States](/Demo/RowState) 페이지 참조.
*   checkBar.**exclusive**가 true일 때 라디오버튼으로 표시. [CheckBar](/Demo/CheckBar) 페이지 참조.
*   편집기에 **textCase** 속성 추가. **TextInputCase.NORMAL**, **TextInputCase.UPPER**, **TextInputCase.LOWER** 중 하나로 지정할 수 있음. [Editors](/Demo/Editors) 페이지 참조.
*   그리드 editOptions.enterToTab 속성 추가. true로 지정하면 Enter 키에서 다음 셀로 이동. [Editors](/Demo/Editors) 페이지 참조.
*   IE 에서 tab 키로 셀 이동을 하기 위해서는 object 태그에 <param name='seamlesstabbing' value='false'> 태그를 추가해야 함. swfobject의 embedswf()를 호출하는 경우에는 **parObj** 매개 변수 객체에 속성을 추가함.
*   DropDownEditor를 정상적인 위치에 표시할 수 없을 때 표시하는 방식 개선.
*   Fiexed row 전체 높이가 일정 이상이면 편집기가 표시되지 않는 문제 개선.
*   Fiexed colum 전체 너비가 일정 이상일 때 포커스 컬럼 스크롤 문제 개선.
*   rowCount가 0일때 더블클릭시 onDataCellDblClicked 발생하는 문제 개선.
*   **showEditor()** 호출 시 기존 텍스트 남는 문제 개선. [행 추가](/Demo/Inserting), [행 수정](/Demo/Updating) 페이지 참조.

Version 1.1.4 - 2014/04/18

*   DataProvider.**clearRowStates(deleteRows, rowEvents)**의 **rowEvents** 기본값을 **false**로 변경. 즉, 매개변수를 지정하지 않고 호출하면 데이터행별 상태 변경 이벤트(onRowStateChanged)가 발생하지 않는다.
*   DataProvider.**setRowState(row, state)**의 **state** 값을 잘못 입력하면 RowState.NONE으로 설정하지 않고 무시하는 것으로 변경.  
     DataProvider에 setRowStates() 추가.
*   여러 행의 상태를 강제로 변경하는 DataProvider.**setRowStates** 추가.
*   여러 행을 추가/수정하는 LocalDataProvider 메쏘드들의 마지막 매개변수 rowEvents 추가. true로 지정하면 행별로 이벤트 발생.
*   특정한 시점에 보관한 DataProvder의 데이터 셋으로 복원하는 기능 추가. [Data Rollback](/Demo/DataRollback) 페이지 참조.
*   GridView.setColumns()로 처음 설정한 컬럼 셋을 다른 형태로 배치하는 기능 추가. [Column Layout](/Demo/ColumnLayout) 페이지 참조.
*   TreeNode 에 CheckBox 추가. [Set Json Array](/Demo/TreeSetJsonData) 참조.
*   DataProvider.**getStateRows(state)**에서 state에 **RowState.NONE**을 지정할 수 있도록 함. 또, **clearRowStates**, **setRowState** 함수 추가. [Row State](/Demo/RowState) 페이지 참조.
*   지정하지 않거나 undefined로 지정한 필드값은 변경하지 않는 LocalDataProvider.**updateStrictRow**, **updateStrictRows** 함수 추가. [데이터행 추가](/Demo/AddDataRow) 페이지 Strict Update 참조.
*   GridView에 **checkAll**, **checkItem**, **checkRow**, **isCheckedItem**, **isCheckedRow** 등 CheckBar 관련 함수들 추가. [CheckBar](/Demo/CheckBar) 페이지 참조. **checkItem**는 exclusive 매개변수를 true로 지정해서 한 행만 checked 되도록 할 수 있다.
*   그리드 checkBar.**exclusive** 속성을 true로 지정하면 사용자가 마우스로 클릭한 행만 배타적으로 checked 된다.
*   LocalDataProvider에 **moveRow** 메쏘드 추가. [데이터행 추가](/Demo/AddDataRow) 페이지 참조.
*   대량의 행을 추가/수정할 때 행별 이벤트가 발생하지 않도록 하는 DataProvider.**beginUpdate()**, **endUpdate()** 메쏘드 추가. [여러 데이터 행 추가하기](/Demo/AddMultiRows) 페이지 참조.
*   SelectionStyle에 행 하나, 컬럼 하나를 선택할 수 있는 **singleRow**, **singleColumn** 옵션 추가. [Selecting](/Demo/Selecting) 페이지 참조.
*   사용자 입력으로 편집기 내용이 변경될 때 **onEditChange** 이벤트 발생. [Editors](/Demo/Editors) 페이지 참조.
*   Expression에 **is defined**, **is not defined**, **is empty**, **is not empty** 연산자 추가.
*   Expression에서 null이나 undefined값의 **len**, **lenb** 연산값이 0이 되도록 개선.
*   편집기가 표시되지 않은 상태에서 Copy & Paste 가능.
*   date editor에서 **yearNavigation** 속성을 true로 주면 년도 이동 가능.
*   date editor에서 **textReadOnly** 속성을 true로 주면 키보드로 입력 안되고 달력에서만 선택하도록 가능.
*   GridView의 **beginInsertRow()**, **beginAppendRow()**, **beginUpdateRow()** 함수를 이용해서 그리드를 행 삽입/추가/수정 상태로 진입 가능. (  
     또한, GridBase의 **showEditor()** 함수를 이용하면 현재 포커스가 있는 셀에 편집기 표시. [데이터행 추가](/Demo/AddDataRow) 페이지 참조.
*   GridView의 **setColumnProperty** 함수 추가, 단순 속성 변경시 **setColumnProperty** 사용
*   insertRows, addRows, updateRows 에서 추가/변경된 행들의 상태가 변경되지 않는 버그 개선.
*   스크롤바 버튼 클릭 시 data click 이벤트 발생하는 문제 개선.
*   이전 편집 중 설정됐던 컬럼 validation 에러 아이콘이 해당 다음 편집 행의 컬럼 셀에 남아 있는 문제 개선.
*   첫번째 행 편집 시 기존 편집 내용이 편집기에 따라붙는 현상 개선.
*   데이터셀에 역슬래시('\')가 포함된 경우 그리드의 **getRowData()** 에러 개선.
*   fixedOptions.colCount가 0보다 클 때 트리뷰의 expander 파트가 표시되지 않는 문제 개선.

* * *

Version 1.1.3 - 2014/03/31

*   사용자 편집 중 loadData() 대응 방식 확장. [Loading Policy](/Demo/LoadingPolicy) 참조.
*   [Load Filter](/Demo/LoadFilter)를 이용해 로드된 데이터셋의 일부만 DataProvider에 저장.
*   loadData() options의 **rows**에 하위 영역 지정. [Load Source](/Demo/LoadSource) 참조.
*   CreateAndDeleted 상태 무시 옵션 추가. [Row State](/Demo/RowState) 참조.
*   LocalDataProvider에 insertRows(), updateRows() 함수 추가.
*   컬럼 없는 빈 그리드에서 마우스 오른쪽 클릭 에러.
*   TreeView.loadData() parent = -1 지정시 에러 개선.
*   LocalDataProvider.setRowCount() 에서 defaults 매개 변수 적용 안되는 문제.
*   Font에 따라 기본 row 높이가 1 픽셀 정도 달라질 수 있음.

* * *

Version 1.1.2 - 2014/03/22

*   [Merged row group](/Demo/RowGroupMerging)에서 행이 생략되는 버그, 잘못된 셀이 표시되는 버그 개선.
*   Ver 1.1.1 에서 빈값으로 추가되거나 수정된 행이 있는 경우 Sorting 버그 개선.
*   Column 병합 상태에서 Insert, Append 시작하면 bounds error 발생 문제 개선.
*   Column 필터 선택 상자에 스크롤바가 표시되지 않는 문제 개선. 선택 상자의 크기를 지정할 수 있도록 함. [Column Filtering](/Demo/ColumnFiltering) 페이지 참조.
*   TreeView의 [expandAll(), collapseAll()](/Demo/TreeSetArrayData) 구현.
*   GridBase에 getEditingItem() 함수 추가. 현재 편집 중인 행의 값을 리턴. [Updating](/Demo/Updating) 페이지 소스 참조.
*   DataProvider에 onRowUpdating, onRowUpdated 콜백 추가. [Updating](/Demo/Updating) 페이지 소스 참조.
*   대량 데이터를 Sorting, Filtering, Grouping할 때 Toast view 표시. [Toast View](/Demo/ToastView) 페이지 소스 참조.

* * *

Version 1.1.1 - 2014/03/14

*   Backspace나 Delete키로 입력을 시작하고 바로 셀을 빠져나가면 원복되는 문제 개선.
*   booleanFormat, datetimeFormat 스타일 속성 추가. [Styles](StylesProperties) 및 [Data Type](DataType) 페이지 참조.  
     **기존의 dateFormat 대신 datetimeFormat을 사용해야 함. dateFormat을 사용한 기존 코드 업그레이드 권고함.**
*   셀 에디터에 booleanFormat, datetimeFormat 속성 추가하고 Boolean 필드 값을 입력하는 문제 개선. [Data Type](DataType) 페이지 참조.
*   데이터 행 생성 후 편집하면 상태가 Created에서 Updated로 변경되던 것을 Created로 유지되도록 함.
*   DataColumn에 labelField 속성 추가. [Column Lookup](ColumnLookup) 페이지 참조.
*   LookupTree 기능 추가. [Lookup Tree](LookupTree) 페이지 참조.

* * *

Version 1.1.0 - 2014/02/28

*   Flash wmode를 **direct**로 변경.
*   GridView.onSelectionEnded 이벤트 추가. 선택을 시작하고 마우스가 Up 되거나, 키보드가 Up 되면 발생. [Selecting](/Demo/Selecting) 페이지 참조.
*   고정 컬럼이 설정되면 전체적으로 느려지는 현상 개선.
*   행 그룹 Footer에 그룹 합계가 잘 못 표시되는 문제 해결.
*   마지막 행에서 appending 종료(commit 혹은 cancel) 시 포커스셀의 위치가 잘못되는 현상 개선.
*   TreeView 첫번째 컬럼에서 Ctrl + Left / Right 키로 선택된 행을 expand/collapse 하도록 함.
*   컬럼 병합 셀에 현재 표시되는 최상위 행의 값을 표시하는 문제. 병합의 실제 최상위 값으로 표시하도록 개선.
*   첫 행에서 마우스로 행 크기 변경 시작 시 포커스가 첫 행으로 이동하는 문제 개선.
*   수평 스크롤을 최상위 컬럼 그룹 대신 최상위 데이터 컬럼 단위로 실행하도록 변경.
*   시리즈 컬럼 등 컬럼 자동 너비 맞추기 실행 에러 개선.

* * *

Version 1.0.13 - 2014/02/13

*   CheckCellRenderer.editable이 true이고 startEditOnClick이 true이면 focus가 아닌 Check 셀을 클릭해도 셀의 값이 변경됨  
     (이전 버전의 경우 처음 클릭시 focus가 되고 다시 클릭하면 check가 클릭 되었음)
*   dropDown editor에 caseSensitive 속성 추가. 입력해서 찾을 때 대소문자 구분 여부. 기본값은 false
*   EditOptions에 checkDiff 속성 추가. true이면 row commit 시점에서 이전값과 비교하여 동일할때 RowState를 변경하지 않음. 기본값은 false
*   dropDown editor에서 입력시 찾지못하는 오류 해결.
*   컬럼 헤더 클릭시 onDataCellClicked 발생하는 오류 해결.
*   FixedOptions.rowCount 설정 시 indicator영역 마우스 포인트 이동시 발생하는 오류 해결.
*   ItemCount 변경시 current.itemIndex가 itemCount보다 클 경우 발생하는 오류 해결.

* * *

Version 1.0.12 - 2014/01/13

*   CheckCellRenderer.editable 속성을 지정해서 편집기로 사용할 수 있도록 함.
*   고정 row 갯수가 1보다 클 때 row resizing ui 에러 발생 해결.
*   DataProvider에 fields가 지정되지 않은 상태에서 setRowCount()를 호출하면 무시하도록 함.
*   GridView.getColumNames()에서 columnsOnly 매개변수 추가. true면 group들의 이름은 제외된 채로 리턴. 기본값은 false.
*   DataProvider에 getFields(), getFieldNames() 메쏘드 추가.

* * *

Version 1.0.10 - 2013/12/13

*   GridBase.isVisible(), GridBase.setVisible() 추가.
*   GridView.commit(force) 메쏘드 추가 - 현재 편집 중인 행의 data를 provider에 커밋한다. force가 true이면 실제 수정이 없어도 data provider에 commit한다.  
     GridView.cancel() 추가 - 편집 중인 행의 수정 내용을 무시하고 편집 상태를 종료한다.
*   DataColumn.editable, DataColumn.readOnly 속성 추가.  
     - **editable**: false면 데이터셀에 편집기를 표시하지 않는다. 기본값은 true. - **readOnly**: false면 편집기가 표시되는 경우 편집할 수 없다.
*   GridView.onDataCellClicked, GridView.onDataCellDblClicked 이벤트 추가.
*   DropDown cell 편집기 관련 버그 수정(첫 번째 항목 미선택).

* * *

Version 1.0.9 - 2013/12/10

*   onContextMenuItemClicked 이벤트 핸들러에 index 매개 변수 추가  
     - 컨텍스트 메뉴 클릭하는 시점의 마우스 위치에 해당하는 grid index 제공. - grid.mouseToIndex() 함수 추가.
*   DropDown Editor dropDownCount 속성 추가. 기본값은 8  
     - 관련된 키보드 동작 문제 개선

* * *

Version 1.0.8 - 2013/11/29

*   RealGrids.GridView.onCellEdited 이벤트 추가 - 셀 편집 완료 시 발생.
*   Dropdown editor - 마우스로 선택시 변경 이벤트 미 발생 문제 처리
*   컬럼 그룹핑 상태에서 데이터 위치 오류 개선
*   컬럼 그룹핑 상태에서 데이터 위치 오류
*   grid.setContextMenu() 및 grid.onContextMenuItemClicked 이벤트 추가.

* * *

Version 1.0.7 - 2013/11/23

*   Chrome에서 Ctrl+C를 누르면 변경 상태로 진입하는 문제 처리
*   수정 중인 마지막 행에서 UP key를 누르면 Cancel 되는 문제 처리
*   loadData() 시 리턴된 데이터가 없을 시 발생하는 에러 처리
*   데이터가 load 되지 않은 상태에서 panel 높이 문제 개선
*   null 값이 들어간 컬럼의 정렬 문제 처리
*   최초 loadData() 후 setCurrent 동작 개선
*   left/right arrow 키 이동 개선  
        - editOptions.useArrowKeys 속성으로 편집기 표시된 상태에서 입력 캐럿이 좌우 양끝에 있을 때, 셀 이동 방식을 지정할 수 있음.

* * *

Version 1.0.5 - 2013/09/03

*   [<span>Load Json Data</span>](/Demo/LoadJsonData) 등에서 호출하는 load(options) 함수에서 **post** 호출 시 parameter 개체가 form 매개변수들로 제대로 전달되지 않던 문제를 수정했습니다.
*   Excel 내보내기 기능이 개선됐습니다. [<span>Excel 내보내기 - 컬럼 병합</span>](/Demo/ExcelColumnMerge), [<span>Excel 내보내기 - 행 그룹핑</span>](/Demo/ExcelRowGroup)

* * *

Version 1.0.4 - 2013/08/26

*   페이징 기능이 포함됐습니다. [<span>Paging 개요</span>](/Demo/PagingOverview)
*   Xml 대신 Binary 포맷으로 export 하도록 변경했습니다. 관련된 함수명도 변경됐습니다. [<span>Excel 개요</span>](/Demo/ExcelOverview), [<span>Excel 파일로 내보내기</span>](/Demo/ExportToExcel)
*   한글 입력으로 편집을 시작하는 기능도 개선됐습니다. [Updating](/Demo/Updating) 등에서 입력 테스트 할 수 있습니다.

* * *

Version 1.0.3 - 2013/08/07

*   TreeView Load Data
*   [<span>폰트 스타일 관련 변경</span>](/Demo/StylesProperties) - **이 사이트에서 제공하는 스킨을 이용하여 테스트하는 경우 반드시 새 버젼을 이용해야 함.**
*   BarCode Cell Renderer

* * *

Version 1.0.2 - 2013/07/23

*   Merge Mode Row Grouping
*   Column Cell Merging

* * *

Version 1.0.1 - 2013/07/08

*   Cell 높이 채우기
*   Series Column

* * *

Version 0.10.2 - 2013/06/25

*   onCurrentChaning, onCurrentChanged 이벤트 매개변수 변경
*   StatesBar, statesBar를 StatusBar, statusBar로 변경
*   LocalDataProvider.getDataRow()를 getRow()로 이름 변경
*   LocalDataProvider.getDataRows()를 getRows()로 이름 변경
*   GridView.findColumn()을 columnByName()으로 이름 변경

* * *

Version 0.9.0 - 2013/05/28

*   LocalDataProvider.getJsonRows() 추가
*   LocalDataProvider.getRowCount() 추가
*   LocalDataProvider.getDataRows() 추가
*   Expression의 like, match, imatch 연산자 추가
*   행 그룹시 소팅 버그 수정
*   TreeGridView icon 추가 기능
*   TreeGridView expanderStyle로 스타일링

* * *

Version 0.5.0

*   Insert/Delete 관련 API 추가
*   Edit Column Validation 관련 API 추가
*   ImageCell, IconCell, ShapeCell, SignalCell Renderer 관련 API 추가
*   Options/Select Options 관련 API 추가
*   Export-Excel 기능 추가
*   ValidationOptions 관련 API 추가
*   SkinManager Icon관리 기능 추가
*   MS IE browser에서 화면에 그리드가 보이지 않는 문제 수정했습니다.
*   Data/Data Search demo가 추가되었습니다.
*   Save Skin: 관리자아이디로 theme Skin Type을 저장 할 때 user로 바뀌지 않게 수정
*   Save Skin: 오류 메시지 뜨지 않도록 수정
*   Create New Skin: 기본스타일을 저장 하도록 프로그램 수정
