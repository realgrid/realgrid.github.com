---
layout: apipost
title: CheckCellRenderer
part: Types
typename: Cell Renderers
order: CheckCellRenderer
objectname: 
directiontype: 
permalink: /api/types/CheckCellRenderer/
tags:
  - CheckCell 
  - Checkbox
  - Check
  - 체크셀
  - 체크박스
  - 체크표
---

#### Description

> Check 셀 렌더러는 셀의 값을 true/false 두 가지 상태로 표시하는 렌더러이다.    
> 컬럼에 연결된 필드의 자료형이 Boolean이 아니라면, 렌더러의 trueValues에 지정된 값들을 true로, falseValues로 지정된 값들을 false로 판단한다.

#### properties

> **trueValues**   
> Type: Array   
> Default: none   
> true로 표시할 값들의 배열   

> **falseValues**   
> Type: Array   
> Default: none   
> false로 표시할 값들의 배열   

> **labelPosition**   
> Type: String   
> Default:    
> 라벨이 표시될 위치를 지정한다. "hidden", "right", "left", "bottom", "top"  

> **labelGap**   
> Type: Number   
> Default: 4   
> 체크표시와 라벨간의 여백을 지정한다.  

> **spaceKey**   
> Type: Boolean   
> Default: true   
> 스페이스바로 체크 토글 가능 여부를 지정한다.  

> **editable**   
> Type: Boolean   
> Default: false   
> 체크 표시와 별개로 값의 수정 여부를 지정한다.  

> **startEditOnClick**   
> Type: Boolean   
> Default: false   
> 마우스로 클릭할때 체크 토글 여부를 지정한다.  

> **shape**   
> Type: String   
> Default: "default"   
> 표시되는 기호 모양을 체크표시로 할 것인지 체크박스로 할 것인지를 지정한다. "default", "box"  

### Example  

<pre class="prettyprint">
	var columns = [{
        "name": "Shipping",
        "fieldName": "Shipping",
        "type": "data",
        "width": "70",
        "editable": false,
        "renderer": {
            "type": "check",
            "editable": true,
            "startEditOnClick": true,
            "trueValues": "True",
            "falseValues": "False",
            "labelPosition": "right"
        },
        "styles": {
            "paddingLeft": 8,
            "textAlignment": "center",
            "background": "#33ffff00"
        },
        "header": {
            "text": "Check Edit",
            "styles": {
                "fontBold": true
            }
        }
    }, {
        "name": "EmployeeID",
        "fieldName": "EmployeeID",
        "type": "data",
        "width": "85",
        "renderer": {
            "type": "check",
            "shape": "box",
            "falseValues": "2,4,6"
        },
        "styles": {
            "textAlignment": "center"
        },
        "header": {
            "text": "Employee ID 1"
        }
    }, {
        "name": "EmployeeID",
        "fieldName": "EmployeeID",
        "type": "data",
        "width": "85",
        "renderer": {
            "type": "check",
            "falseValues": "1,3"
        },
        "styles": {
            "textAlignment": "center",
            "figureBackground": "#ffff0000",
            "figureInactiveBackground": "#33ff0000",
            "figureSize": "130%"
        },
        "header": {
            "text": "Employee ID 2"
        }
	}]

	gridView.setColumns(columns);
</pre>

#### See Also 

> [Check Cell Renderer](http://demo.realgrid.net/Demo/CheckCellRenderer) 참조  

