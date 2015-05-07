---
layout: apipost
title: DataColumn
part: Types
objectname: 
directiontype: 
permalink: /api/types/DataColumn/
---


> DataProvider 필드들 중 하나의 값을 표시하는 컬럼이다.

#### Properties

> **name**
> Type: String 
> Default:  null    
> 컬럼 이름. 많은 곳에서 컬럼을 이 이름으로 참조하므로 반드시 지정해야 하며, 그리드 내에서 유일해야 한다. 

> **tag**
> Type: String 
> Default: true
> 이름과 다르게 지정하지 않아도 되고 중복되어도 상관없다. 컬럼들을 업무 요구에 따라 분류하고 싶을 때 사용할 수 있다. [GridBase_columnByTag\|columnByTag](/api/types/) 나 [GridBase_columnsByTag\|columnsByTag](/api/types/)로 이 값과 관련된 컬럼들을 찾을 수 있다.  

> **width**
> Type: Number 
> Default: 100 
> 컬럼의 시작 너비를 pixel 단위로 지정한다. 컬럼의 실제 표시 너비는 상황에 따라 이 값과 다를 수 있다. 또한 실행 중 사용자에 의해 변경될 수도 있다. 

> **displayWidth**
> Type: Number 
> Default: undefined   
> 컬럼이 속한 컬럼그룹내에서 컬럼의 표시 너비를 지정한다.    

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
> 이 컬럼이 표시하는 [DataField](/api/types/)의 이름을 지정한다. 존재하지 않는 필드 이름을 지정하거나 지정하지 않으면 이 컬럼에 해당하는 셀은 아무것도 표시하지 않는다.

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

> **displayIndex**
> Type: Number 
> Default:  undefined    
> 컬럼이 속한 컬럼그룹내에서  컬럼의 표시 순서를 나타낸다. 읽기만 가능한 값이다.  

> **sortable**
> Type: Boolean 
> Default:  null   
> 헤더에 sort handle을 표시하고, 사용자가 그 handle을 클릭해서 컬럼 셀들을 정렬할 수 있도록 할 것인 지를 지정한다.  

> **button**
> Type: [CellButton](/api/types/)
> Default:  [CellButton](/api/types/).NONE   
> 데이터셀 우측에 표시할 버튼의 종류를 지정한다. [CellButton](/api/types/)을 참조한다.  

> **popupMenu**
> Type: array of [MenuItem](/api/types/)
> Default: null   
> 컬럼 [Popup Menu](/api/types/)를 지정한다. 메뉴가 지정되면 데이터셀위로 마우스가 진입하거나 포커스를 가질 때 메뉴 버튼이 활성화된다.    

> **alwaysShowButton**
> Type: Boolean
> Default: false 
>  이 값이 true면 데이터셀 위에 마우스가 진입하거나 셀이 포커스된 상태가 아니더라도 button으로 지정한 버튼을 항상 표시한다. 

> **alwaysShowEditButton**
> Type: Boolean
> Default: false 
>  이 값이 true면 데이터셀 위에 마우스가 진입하거나 셀이 포커스된 상태가 아니더라도 [Cell Editor](/api/types/)가 버튼을 표시하는 것일 때 그 버튼을 항상 표시한다. 

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
> [GridBase_setLookups\|setLookups](/api/types/)에서 지정한 트리의 id를 지정한다.

> **defaultValue**
> Type: String 
> Default: undefined;   
> 초기값을 지정한다.

> **required**
> Type: boolean 
> Default: false   
> 필수 여부를 지정한다.

> **imeMode**
> Type: [ImeMode](/api/types/) 
> Default: [ImeMode](/api/types/).DONT_CARE   
> 기본 IME 상태를 정의한다.

> **textInputCase**
> Type: [TextInputCase](/api/types/)
> Default: [TextInputCase](/api/types/).NORMAL      
> 

> **nanText**
> Type: String 
> Default: null   
> 셀의 값이 nan일때 표시할 값을 지정한다.

> **imageList**
> Type: String 
> Default: null   
> 이 컬럼에 지정된 [Cell Renderer](/api/types/)가 참조할 [ImageList](/api/types/)의 이름을 지정한다.    

> **header**
> Type: [ColumnHeader](/api/types/) 
> Default: null   
> 이 컬럼의 헤더 영역과 관련된 속성들을 지정한다.   

> **styles**
> Type: Object 
> Default:  null   
> 컬럼 데이터셀들에게 적용할 스타일들을 지정한다.     

> **dynamicStyles**
> Type: Array of [DynamicStyle](/api/types/) 
> Default:  null   
> 컬럼 데이터셀들에게 적용할 동적 스타일들을 지정한다.     

> **ignoreDefaultDynamicStyles**
> Type: Boolean
> Default: false    
> 기본 다이나믹 스타일의 무시 여부를 지정한다. 

> **footer**
> Type: [ColumnFooter](/api/types/) 
> Default: null
> 이 컬럼의 푸터 영역과 관련된 속성들을 지정한다.     

> **editor**
> Type: [CellEditor](/api/types/)
> Default:  null   
> 컬럼 데이터셀들의 값을 입력하는 [CellEditor](/api/types/)의 종류를 지정한다.    

> **renderer**
> Type: [CellRenderer](/api/types/)
> Default:  null   
> 컬럼 데이터셀들의 값을 rendering하는 [CellRenderer](/api/types/)의 종류를 지정한다.     

> **filters**
> Type: Array of [ColumnFilter](/api/types/)
> Default:  null   
> 이 컬럼에 적용할 [ColumnFilter](/api/types/) 목록을 지정한다.   

> **validations**
> Type: Array of [EditValidation](/api/types/)
> Default:  null   
> 이 컬럼에 적용할 [EditValidation](/api/types/) 목록을 지정한다.   
