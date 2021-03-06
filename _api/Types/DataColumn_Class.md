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
> Type: String | Object   
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

<a name="mergeRule"></a>
> **mergeRule**  
> Type: Object   
> Default: null     
> 컬럼에 속한 셀들을 묶어서 표시할 수 있다. criteria 속성에 이전 행의 셀과 병합할 것인 지를 판단할 수식을 설정한다.  
> 1.1.30버전부터 모든 선행 컬럼들의 값인 prevvalues 속성이 추가되었다.(보이는 컬럼 기준이다. 선행참조되는 컬럼이 많은 경우 느려질 수 있다.)    
> ex) criteria = "prevvalues + value"
> ex) criteria = "value", criteria = "row div 10"  

> **equalBlank**  
> Type: Boolean   
> Default: false     
> 같은 컬럼의 이전 행의 셀과 값이 동일할때 셀의 묶음 여부를 지정한다.

<a name="equalBlankExpression"></a>
> **equalBlankExpression**  
> Type: String   
> Default: "value"     
> equalBlank가 true인 경우 같은 값으로 처리할 수식을 지정한다.    
> ex) "equalBlankExpression": "value + values['company']"  
> RealGridJS 1.1.30 이상부터 지원한다.   

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
> 자세한 내용은 [DynamicStyle](/api/types/DynamicStyle)에서 확인한다.  

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

> **excelFormulaStatement**  
> Type: String  
> Default:  null     
> 엑셀 export시 출력되는 수식을 지정한다.  
> ex) excelFormulaStatement: "${excelcolumn['컬럼1']}${row} + ${excelcolumn['컬럼2']}${row}"  
> JS Only.  

> **buttonCursor**  
> Type: String   
> Default: null     
> 버튼에 마우스 커서가 위치할때 표시될 마우스 커서의 모양을 지정한다.  
> 지정할 수 있는 값은 W3C 표준([http://www.w3.org/wiki/CSS/Properties/cursor](http://www.w3.org/wiki/CSS/Properties/cursor)) 을 준수한다. uri 미지원    
> RealGridJS 1.1.26 이상부터 지원한다.   

> **lookupData**  
> Type: Array Of Object | Object   
> Default: null     
> values, labels를 한번에 JSON data로 지정할 수 있게 만들어졌다.    
> lookupData:[{value:"O", label:"오뚜기"},{value:"M", label:"매일유업"}] 형태로 지정한다.    
> value와 label에 해당하는 속성명을 지정할 수 있는 lookupData:{value:"code", label:"text", list:[{code:"O", text:"오뚜기"},{code:"M", text:"매일유업"}]} 형태도 가능하다.   
> RealGridJS 1.1.28 이상부터 지원한다.   

> **sortByLabel**  
> Type: boolean   
> Default: false     
> lookupDisplay사용시 label기준으로 소트를 원할때 사용한다.    
> 하나의 field를 여러개의 column에 연결한 경우에는 적용되지 않는다.  
> RealGridJS 1.1.29 이상부터 지원한다.   

> **displayMinusZero**  
> Type: boolean   
> Default: true     
> false로 지정하면 셀 표시값이 -0 인 경우 0 으로 표시된다.  
> RealGridJS 1.1.29 이상부터 지원한다.   

> **displayCallback**  
> Type: function(grid, index, value){ }   
> grid: gridView객체     
> index: [CellIndex](/api/types/CellIndex/)   
> value: 해당 셀의 값    
> 화면에 표시하려는 값을 return한다.      
> RealGridJS 1.1.31 이상부터 지원한다.   

<a name="textOfInvalid"></a>
> **textOfInvalid**  
> Type: String   
> Default: null     
> 셀데이터가 lookup data에 없는 경우 문자열을 지정하면 해당 문자열이 표시된다.      
> RealGridJS 1.1.32 이상부터 지원한다.   

> **filterIconVisible**  
> Type: boolean   
> Default: true  
> ColumnFilter가 설정된 Column의 header에 표시되는 filter-icon의 표시 여부를 설정한다.

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
}, {
    "fieldName": "oldZipCode",
    "width": 150,
    "header": { "text": "우편번호(구)" },
    "displayCallback":
        function (grid, index, value) {
            return value.substring(0, 3) + "-" + value.substring(3, 6);
        }        
}];

gridView.setColumns(columns);
</pre>

**lookupData에 없는 데이터를 코드값이 아닌 지정한 문자열("확인.."")로 보여주는 기능**

<pre class="prettyprint">
//데이터가 1,2,3인 경우 A,B,C가 표시되지만 그외 데이터이면 "확인.."이 표시된다.        
var columns = [{
    fieldName:"fieldName", 
    name:"colName",
    values:["1", "2", "3"], 
    labels:["A", "B", "C"],
    lookupDisplay:true,
    textOfInvalid:"확인..",
    dynamicStyles:[{
        criteria: "not lookupexists",
        styles:{ foreground:"#FF88ebeb" }
    }]
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

