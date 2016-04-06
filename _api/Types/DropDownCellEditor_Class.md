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

> 드랍다운 에디터의 values 속성으로 지정된 목록 중 한 값을 선택한다.
> 또한, labels에 values 대신 드랍다운 리스트에 표시될 텍스트들을 지정할 수 있다. 

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

### Example  

<pre class="prettyprint">
    gridView.setColumns([{
        "name": "CustomerID",
        "fieldName": "CustomerID",
        "width": "150",
        "sortable": false,
        "lookupDisplay": true,
        "values": ["VINET", "HANAR", "SUPRD", "VICTE", "THREE", "SEVEN"],
        "labels": ["<VINET>", "<HANAR>", "<SUPRD>", "<VICTE>", "<THREE>", "<SEVEN>"],
        "editor": {
            "type": "dropDown",
            "dropDownCount": 4,
            "dropDownPosition": "button"
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

#### See Also

> [Editors](http://demo.realgrid.com/Demo/Editors) 참조  
