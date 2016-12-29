---
layout: apipost
title: MultiCheckCellEditor
part: Types
typename: Cell Editors
order: MultiCheckCellEditor
objectname: 
directiontype: 
permalink: /api/types/MultiCheckCellEditor/
jsonly: true
versions:
  - JS 1.1.21+
tags:
  - MultiDropDownEditor
  - MultiCheckCellEditor
  - 멀티드롭다운
  - multicombo
  - 멀티콤보
  - 멀티체크셀
  
---

#### Description

 DropDownList에서 여러 항목들을 선택할 수 있는 Editor이다.   
 labels에 values 대신 DropDownList에 표시될 텍스트들을 지정할 수 있다. 
 
 셀에 저장되는 값의 각 value를 구분하기 위한 구분자 지정은 editor의 속성이 아닌 column.valueSeperator에서 지정하며 기본값은 ',' 이다.

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

> **displayLabels**  
> Type: boolean  
> Default: true  
> 드롭다운 목록에서 label값으로 보여질 것인지 value값으로 보여질 것인지의 여부를 지정한다.   

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
 
> **dropDownWhenClick**   
> Type: boolean  
> Default: false  
> true 인 경우 버튼이 아닌 셀 자체를 클릭해도 DropDownEditor가 펼쳐진다.     

> **partialMatch**   
> Type: boolean  
> Default: false  
> true 인 경우 한글 초성만 입력해도 해당하는 라벨 위치로 바로 이동합니다.   

> **acceptText**   
> Type: String  
> Default: 'accept'  
> 체크한 데이터들을 에디터에 적용하는 버튼의 문구를 지정한다.     

> **cancelText**   
> Type: String  
> Default: 'cancel'  
> 체크한 데이터들을 에디터에 적용 취소하는 버튼의 문구를 지정한다.     

> **showButtons**   
> Type: Boolean  
> Default: true  
> accept, cancel 버튼의 표시 여부를 지정한다.       

#### Examples 

<pre class="prettyprint">
gridView.setColumns([{
{
    "name": "Country",
    "fieldName": "Country",
    "width": "150",
    "valueSeparator": ",",
    "editor" : {
        "type": "multicheck",
        "dropDownCount": 4,
        "acceptText": "확인",
        "cancelText": "취소",
        "showButtons": true
    },
    "values": ['KR', 'US', 'JP','FR', 'CH', 'BR', 'BE', 'DE', 'UK', 'CN', 'AE', 'SG'],
    "labels": ['대한민국', '미국', '일본', '프랑스', '스위스', '브라질', '벨기에', '독일', '영국', '중국', '아랍에미레이트', '싱가폴'],
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Country"
    }
}]);

var datas = [
    {"Country": "FR,KR,JP"},
    {"Country": "FR,KR,JP,DE,UK,AE"},
    {"Country": "KR,CH"},
    {"Country": "AE"}
]
dataProvider.setRows(datas);
</pre>

---

#### Demo Links

* [MultiCheckCellEditor](http://demo.realgrid.com/Demo/MultiCheckCellEditor)  
* [CSS Styles](http://demo.realgrid.com/Demo/CssStyles)  
