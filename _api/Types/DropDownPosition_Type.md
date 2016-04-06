---
layout: apipost
title: DropDownPosition
part: Types
typename: Constants
order: DropDownPosition
objectname: 
directiontype: 
permalink: /api/types/DropDownPosition/
tags:
  - DropDownEditor
  - DropDownPosition
  - 드롭다운위치
---

#### Description

> 드롭다운 리스트가 펼쳐질 기준 위치를 지정한다

#### Members

> **BUTTON**    
> Value: "button"   
> 드롭다운 버튼의 오른쪽에 리스트의 오른쪽을 맞춘다.  

> **EDITOR**  
> Value: "editor"   
> 리스트 왼쪽을 에디터의 왼쪽에 맞춥니다.   

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
 