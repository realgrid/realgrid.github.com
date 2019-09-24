---
layout: apipost
title: DropDownCellEditor
part: Types
typename: Cell Editors
order: DropDownCellEditor
objectname: 
directiontype: 
permalink: /api/types/DropDownCellEditor/
tags:
  - DropDownEditor
  - 드롭다운
  - combo
  - 콤보
---

#### Description

 드랍다운 에디터의 values 속성으로 지정된 목록 중 한 값을 선택한다.  
 또한, labels에 values 대신 드랍다운 리스트에 표시될 텍스트들을 지정할 수 있다. 

#### Properties

> **maxLength**  
> Type: Number  
> Default: 0  

> **textReadOnly**  
> Type: boolean    
> Default: false    
> true이면 키보드로 입력이 안되고 선택만 가능하게 된다.  

> **textCase**  
> Type: String  
> Default: [TextInputCase](/api/types/TextInputCase/).DEFAULT  
> 편집기에 입력되는 문자를 자동으로 대소문자로 변경한다. [TextInputCase](/api/types/TextInputCase/)에 지정할 수 있는 값들이 선언되어 있다. [TextInputCase](/api/types/TextInputCase/).DEFAULT로 지정하면 컬럼의 textInputCase에 지정한 값을 따르게 된다.  

> **values**  
> Type: Array  
> Default: []  
> 목록의 실제 값들을 지정한다.  

> **labels**  
> Type: Array  
> Default: []  
> 목록의 표시 값들을 지정한다.  

> **dropDownCount**  
> Type: Number  
> Default: 8  
> 속성에 표시될 목록의 수를 지정할 수 있다.  

> **itemSortStyle**  
> Type: [ItemSortStyle](/api/types/ItemSortStyle)  
> Default: ItemSortStyle.NONE  
> 드롭다운 목록의 정렬 여부를 지정한다.

> **caseSensitive**  
> Type: boolean  
> Default: false  
> 키 입력시 대소문자의 구분 여부를 지정한다.  

> **commitOnSelect**  
> Type: boolean  
> Default: true  
> 목록을 선택하였을때 commit 여부를 지정한다. 

> **domainOnly**  
> Type: boolean  
> Default: false
> 목록에 있는 값들만 지정할 수 있는지의 여부, true시 목록 이외의 값은 지정할 수 없다.  

> **dropDownWidth**  
> Type: number  
> Default: -1  
> 리스트의 너비를 지정합니다. -1이면 컬럼 너비, 0이면 리스트의 내용에 맞춰집니다.   

> **dropDownPosition**   
> Type: string  
> Default: 'button'  
> 리스트가 펼쳐질 기준을 지정합니다. 'button'이면 드롭다운 버튼의 오른쪽에, 'editor'이면 왼쪽에 맞춥니다.  

> **partialMatch**   
> Type: boolean  
> Default: false  
> true 인 경우 한글 초성만 입력해도 해당하는 라벨 위치로 바로 이동합니다.     

> **dropDownWhenClick**   
> Type: boolean  
> Default: false  
> true 인 경우 버튼이 아닌 셀 자체를 클릭해도 DropDownEditor가 펼쳐진다.     

> **trimLabelText**   
> Type: boolean  
> Default: true    
> false 인 경우 trim을 하지 않고 목록을 보여준다.    
> RealGridJS만 ver 1.1.24부터 지원된다.

<a name="displayLabels"></a>
> **displayLabels**    
> ~ 1.1.29버전까지 사용    
> Type: boolean  
> Default: true  
> 드롭다운 목록에서 label값으로 보여질 것인지 value값으로 보여질 것인지의 여부를 지정한다.       
> ********************************************************************     
> 1.1.30버전 이후 사용     
> Type: [DropDownValueLavel](/api/types/DropDownValueLabel/)  
> Default: DropDownValueLavel.LABEL  
> 드롭다운 목록에서 label값으로 보여질 것인지 value값으로 보여질 것인지 또는 label value, value label로 보여질것인지의 여부를 지정한다.   

> **separator**   
> Type: string  
> Default: null    
> displayLabels 속성이 "valueLabel", "labelValue"인 경우 두 값들사이의 구분자를 지정한다.   
> RealGridJS만 ver 1.1.30부터 지원된다.

> **itemColumned**   
> Type: boolean  
> Default: false       
> displayLabels 속성이 "valueLabel", "labelValue"인 경우 두 값들사이의 여백을 자동으로 조정하여 정렬 표시한다.       
> RealGridJS만 ver 1.1.30부터 지원된다.

#### Examples 

<pre class="prettyprint">
gridView.setColumns([{
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "width": "150",
    "sortable": false,
    "lookupDisplay": true,
    "values": ["VINET", "HANAR", "SUPRD", "VICTE", "THREE", "SEVEN"],
    &quot;labels&quot;: [&quot;&lt;VINET&gt;&quot;, &quot;&lt;HANAR&gt;&quot;, &quot;&lt;SUPRD&gt;&quot;, &quot;&lt;VICTE&gt;&quot;, &quot;&lt;THREE&gt;&quot;, &quot;&lt;SEVEN&gt;"],
    "editor": {
        "type": "dropDown",
        "dropDownCount": 4,
        "dropDownPosition": "button",
        "partialMatch": "true"
    },
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "DropDown Edit",
        "styles": {
            "background": "linear,#22ffd500,#ffffd500,90"
        }
    }
}]);

gridView.setColumns([{
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "width": "150",
    "sortable": false,
    "lookupDisplay": true,
    "values": ["1", "2", "3", "4", "5", "6"],
    "labels": ["VINET", "HANAR", "SUPRD", "VICTE", "THREE", "SEVEN"],
    "editor": {
        "type": "dropDown",
        "dropDownCount": 4,
        "dropDownPosition": "button",
        "partialMatch": "true",
        "displayValues": "valueLabel",  //1.1.30버전부터 지원
        "separator": ")"
    },
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "DropDown Edit",
        "styles": {
            "background": "linear,#22ffd500,#ffffd500,90"
        }
    }
}]);

</pre>

---

#### Demo Links

* [Editors](http://demo.realgrid.com/Editing/Editors/)  
