---
layout: apipost
title: DataColumn
part: Types
typename: Classes
order: DataColumn
objectname: 
directiontype: 
permalink: /api/types/DataColumn/
tags:
    - 컬럼
    - 열
    - column
---

#### Description

 DataProvider 필드들 중 하나의 값을 표시하는 컬럼이다.

#### Properties

> **name**  
> Type: String   
> Default:  null      
> 컬럼 이름. 많은 곳에서 컬럼을 이 이름으로 참조하므로 반드시 지정해야 하며, 그리드 내에서 유일해야 한다.   

> **tag**  
> Type: String   
> Default: true  
> 이름과 다르게 지정하지 않아도 되고 중복되어도 상관없다. 컬럼들을 업무 요구에 따라 분류하고 싶을 때 사용할 수 있다. [columnByTag](/api/GridBase/columnByTag) 나 [columnsByTag](/api/GridBase/columnsByTag)로 이 값과 관련된 컬럼들을 찾을 수 있다.  

> **width**  
> Type: Number   
> Default: 100   
> 컬럼의 시작 너비를 pixel 단위로 지정한다. 컬럼의 실제 표시 너비는 상황에 따라 이 값과 다를 수 있다. 또한 실행 중 사용자에 의해 변경될 수도 있다.   

> **displayWidth**  
> Type: Number   
> Default: undefined     
> 컬럼이 속한 컬럼그룹내에서 컬럼의 표시 너비를 지정한다.      

> **displayIndex**  
> Type: Number   
> Default:  undefined      
> 컬럼이 속한 컬럼그룹내에서  컬럼의 표시 순서를 나타낸다. 읽기만 가능한 값이다.  

> **height**  
> Type: Number   
> Default: 0   
> 컬럼그룹 내에서 이 컬럼의 높이를 지정한다.        

> **fillHeight**  
> Type: Number   
> Default: 0   
> 컬럼그룹 내에서 이 컬럼의 높이를 비율로 지정한다.   

> **fillWidth**  
> Type: Number   
> Default: 0   
> 컬럼그룹 내에서 이 컬럼의  폭을 비율로 지정한다.   

> **fieldName**  
> Type: String   
> Default: null   
> 이 컬럼이 표시하는 [DataField](/api/types/DataField)의 이름을 지정한다. 존재하지 않는 필드 이름을 지정하거나 지정하지 않으면 이 컬럼에 해당하는 셀은 아무것도 표시하지 않는다.

> **visible**  
> Type: Boolean   
> Default: true      
> true면 이 컬럼의 셀들을 표시한다. false면 셀들을 표시하지 않는다. 컬럼 객체가 제거되는 것은 아니다.  

> **editable**  
> Type: Boolean   
> Default: true      
> true면 readOnly 설정과 상관없이 셀에 편집기를 표시할 수 있다.  

> **readOnly**  
> Type: Boolean   
> Default: false     
> 이 컬럼 셀들의 값을 사용자가 수정할 수 있게 할 것인 지를 지정한다. true로 설정하면 편집기가 표시되도 값을 입력할 수 없다.    

> **resizable**  
> Type: Boolean   
> Default:  true   
> true로 지정하면 사용자 컬럼 헤더의 오른쪽 경계를 마우스로 드래깅해서 컬럼의 너비를 변경할 수 있다.     

> **movable**  
> Type: Boolean   
> Default: true    
> true로 지정하면 사용자 컬럼 헤더를 마우스로 드래깅해서 컬럼의 위치를 변경할 수 있다. 현재 같은 컬럼 그룹내에서만 이동이 가능하다. 최상위 컬럼이나 그룹은 최상위 레벨에서만 이동 가능하다.   

> **sortable**  
> Type: Boolean   
> Default:  true     
> 헤더에 sort handle을 표시하고, 사용자가 그 handle을 클릭해서 컬럼 셀들을 정렬할 수 있도록 할 것인 지를 지정한다.  

> **groupable**  
> Type: Boolean   
> Default:  true     
> true로 지정하면 사용자가 컬럼 헤더를 마우스로 드래깅해서 그룹핑을 할 수 있다.  

> **button**  
> Type: [CellButton](/api/types/CellButton)  
> Default:  [CellButton](/api/types/CellButton).NONE     
> 데이터셀 우측에 표시할 버튼의 종류를 지정한다. [CellButton](/api/types/CellButton)을 참조한다.    

> **imageButtons**  
> Type: Object  
> Default: null     
> button의 type이 'image' 인 경우 이미지 버튼에서 사용되는 이미지를 지정한다.   
> "width", "height", "margin", "imageGap", ["Image"](/api/types/Image/)의 속성을 가진다.      

> **popupMenu**  
> Type: array of [MenuItem](/api/types/MenuItem)  
> Default: null     
> 컬럼 [Popup Menu](/api/features/Popup Menu/)를 지정한다. 메뉴가 지정되면 데이터셀위로 마우스가 진입하거나 포커스를 가질 때 메뉴 버튼이 활성화된다.      

> **alwaysShowButton**  
> Type: Boolean  
> Default: false   
>  이 값이 true면 데이터셀 위에 마우스가 진입하거나 셀이 포커스된 상태가 아니더라도 button으로 지정한 버튼을 항상 표시한다.  

> **alwaysShowEditButton**  
> Type: Boolean  
> Default: false   
>  이 값이 true면 데이터셀 위에 마우스가 진입하거나 셀이 포커스된 상태가 아니더라도 셀 편집기([Cell Editor](/api/features/Cell Editor/))가 버튼을 표시하는 유형일 때 그 버튼을 항상 표시하도록 지정한다. 현재 버튼이 표시되는 셀 편집기는 [DropDownCellEditor](/api/types/DropDownCellEditor), [DateCellEditor](/api/types/DateCellEditor), [SearchCellEditor](/api/types/SearchCellEditor)가 있다.    

> **buttonVisibility**  
> Type: [ButtonVisibility](/api/types/ButtonVisibility)  
> Default: [ButtonVisibility](/api/types/ButtonVisibility).DEFAULT   
> 버튼이 표시되는 방법을 지정한다.  

> **editButtonVisibility**  
> Type: [ButtonVisibility](/api/types/ButtonVisibility)  
> Default: [ButtonVisibility](/api/types/ButtonVisibility).DEFAULT   
> 셀 편집기([Cell Editor](/api/features/Cell Editor/)) 버튼이 표시되는 방법을 지정한다. 현재 버튼이 표시되는 셀 편집기는 [DropDownCellEditor](/api/types/DropDownCellEditor), [DateCellEditor](/api/types/DateCellEditor), [SearchCellEditor](/api/types/SearchCellEditor)가 있다.       

> **mergeRule**  
> Type: Object   
> Default: null     
> 컬럼에 속한 셀들을 묶어서 표시할 수 있다. criteria 속성에 이전 행의 셀과 병합할 것인 지를 판단할 수식을 설정한다.  
> ex) criteria = "value", criteria = "row div 10"  

> **equalBlank**  
> Type: Boolean   
> Default: false     
> 같은 컬럼의 이전 행의 셀과 값이 동일할때 셀의 묶음 여부를 지정한다.

> **labelField**  
> Type: String  
> Default: null      
> labelField가 다른 필드로 지정되면, 해당 컬럼 셀에는 실제 값 대신 이 필드의 셀과 같은 행에 있는 labelField의 값을 표시한다. values, labels 속성보다 labelField 속성이 우선한다. 

> **labels**  
> Type: Array of String  
> Default: Empty Array      
> 컬럼 셀에 표시될 값의 목록. values에 셀 값에 해당하는 항목이 없으면 셀 값이 그대로 표시된다.

> **values**  
> Type: Array of String  
> Default: Empty Array       
> 컬럼 셀에 실제 값의 목록. values에 셀 값에 해당하는 항목이 없으면 셀 값이 그대로 표시된다.

> **lookupDisplay**  
> Type: Boolean  
> Default: false     
> 컬럼셀에 values 목록 중 셀의 값에 해당하는 위치에 있는 labels 항목의 값의 표시 여부를 지정한다.

> **lookupKeyFields**  
> Type: Array of String   
> Default: null      
> 룩업트리에서 사용할 참조 키필드를 지정한다.  

> **lookupSourceId**  
> Type: Array of String   
> Default: null     
> [setLookups](/api/GridBase/setLookups)에서 지정한 트리의 id를 지정한다.  

> **defaultValue**  
> Type: String   
> Default: undefined;     
> 초기값을 지정한다.  

> **required**  
> Type: boolean   
> Default: false     
> 필수 여부를 지정한다.  

> **imeMode**  
> Type: [ImeMode](/api/types/ImeMode/)   
> Default: [ImeMode](/api/types/ImeMode).DONT_CARE     
> 기본 IME 상태를 정의한다.  

> **textInputCase**  
> Type: [TextInputCase](/api/types/TextInputCase)  
> Default: [TextInputCase](/api/types/TextInputCase).NORMAL      

> **nanText**  
> Type: String   
> Default: null     
> 셀의 값이 nan일때 표시할 값을 지정한다.

> **zeroText**  
> Type: String   
> Default: null     
> 셀의 값이 0일때 표시할 값을 지정한다.  
> dataType이 number 인 경우만 적용된다. 
> JS Only.

> **imageList**  
> Type: String   
> Default: null     
> 이 컬럼에 지정된 [Cell Renderer](/api/features/Cell Renderer/)가 참조할 [ImageList](/api/types/ImageList/)의 이름을 지정한다.      

> **header**  
> Type: [ColumnHeader](/api/types/ColumnHeader)   
> Default: null     
> 이 컬럼의 헤더 영역과 관련된 속성들을 지정한다.     

> **styles**  
> Type: Object   
> Default:  null     
> 컬럼 데이터셀들에게 적용할 스타일들을 지정한다.     

> **dynamicStyles**  
> Type: Array of [DynamicStyle](/api/types/DynamicStyle)   
> Default:  null     
> 컬럼 데이터셀들에게 적용할 동적 스타일들을 지정한다.       

> **ignoreDefaultDynamicStyles**  
> Type: Boolean  
> Default: false      
> 기본 다이나믹 스타일의 무시 여부를 지정한다.   

> **footer**  
> Type: [ColumnFooter](/api/types/ColumnFooter)   
> Default: null  
> 이 컬럼의 푸터 영역과 관련된 속성들을 지정한다.       

> **editor**  
> Type: [CellEditor](/api/types/CellEditor)  
> Default:  null     
> 컬럼 데이터셀들의 값을 입력하는 [CellEditor](/api/types/CellEditor)의 종류를 지정한다      

> **renderer**  
> Type: [CellRenderer](/api/types/CellRenderer)  
> Default:  null     
> 컬럼 데이터셀들의 값을 rendering하는 [CellRenderer](/api/types/CellRenderer)의 종류를 지정한다.       

> **filters**  
> Type: Array of [ColumnFilter](/api/types/ColumnFilter)  
> Default:  null     
> 이 컬럼에 적용할 [ColumnFilter](/api/types/ColumnFilter) 목록을 지정한다.     

> **validations**  
> Type: Array of [EditValidation](/api/types/EditValidation)  
> Default:  null     
> 이 컬럼에 적용할 [EditValidation](/api/types/EditValidation) 목록을 지정한다.     

> **displayRegExp**  
> Type: String
> Default:  null     
> 문자열 변경시(마스킹 등) 사용할 정규식 패턴을 지정한다.    

> **displayReplace**  
> Type: String
> Default:  null     
> 문자열 변경시(마스킹 등) 사용할 패턴을 지정한다.  

> **excelFormat**  
> Type: String
> Default:  null     
> 엑셀 export시 출력되는 서식을 지정한다.  
> ex) excelFormat: "#,##0;[Red]\-#,##0;\-"  
> JS Only.

> **excelFormularStatement**  
> Type: String
> Default:  null     
> 엑셀 export시 출력되는 수식을 지정한다.  
> ex) excelFormularStatement: "${excelcolumn['컬럼1']}${row} + ${excelcolumn['컬럼2']}${row}"  
> JS Only.  



#### Examples

**컬럼을 생성하는 기본적인 방법**

<pre class="prettyprint">
var columns = [{
    name: "column1",
    fieldName: "field1",
    header: "컬럼 타이틀"
}];

gridView.setColumns(columns);
</pre>

**행 추가시 유동적인 컬럼의 기본값 입력 하는 방법**   
고정적인 기본값을 입력할 경우, 컬럼을 생성할때 defaultValue에 기본값을 지정하면 된다. 하지만, 행이 추가되는 시점에 기본값이 결정된다면 GridBase.onRowInserting() 이벤트에서 defaultValue를 변경하는 방법으로 기본값을 지정할 수 있다.

<pre class="prettyprint">
//그리드에 행이 추가되는 시점에 발생하는 이벤트
gridView.onRowInserting = function(grid, itemIndex) {
    //새로운 행이 추가될때 동적으로 생성된 코드를 입력하는 방법
    var newCode = "CD002"; // "CD002"가 동적으로 생성된 코드라고 가정
    grid.setColumnProperty("column1", "defaultValue", newCode);
}
</pre>

**정규식을 이용한 마스킹 방법**
<pre class="prettyprint">
var columns = [{
    "fieldName": "phone",
    "width": 120,
    "header": { "text": "전화번호" },
    "styles": {
        "textAlignment": "near",
        "font": "arial",
        "background": "#ffffff99"
    },
    "displayRegExp": /^([0-9]+)\(([0-9]+)\)(\d{3})(\d{4})$/, 
    "displayReplace": "$1-$2-$3-$4"
}, {
    "fieldName": "email",
    "width": 150,
    "header": { "text": "E-Mail" },
    "styles": {
        "textAlignment": "near",
        "font": "arial",
        "background": "#ffffff99"
    },
    "displayRegExp": /^([a-zA-Z0-9._%+-]+)(@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/,
    "displayReplace":
        function (match, p1, p2, offset, string) {
            return p1.substring(0, 2) + "****" + p2;
        }
}];

gridView.setColumns(columns);
</pre>

---

#### Tutorial Links

* [A2 컬럼 만들기](/tutorial/a2/)    
* [A3 컬럼이름 바꾸기](/tutorial/a3/)   

#### API Links

* [GridBase.setColumn()](/api/GridBase/setColumn)   
* [GridBase.getColumnProperty()](/api/GridBase/getColumnProperty)    
* [GridBase.setColumnProperty()](/api/GridBase/setColumnProperty)

