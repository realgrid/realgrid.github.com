---
layout: apipost
title: ShapeCellRenderer
part: Types
typename: Cell Renderers
order: ShapeCellRenderer
objectname: 
directiontype: 
permalink: /api/types/ShapeCellRenderer/
tags:
    - 도형셀랜더러렌더러
    - 모양
    - 셰이프
---


#### Description

 그리드에 포함되어 있는 몇 개의 shape 아이콘 중 하나를 텍스트와 같이 표시한다.   
Shape는 컬럼 스타일의 figureSize 설정으로 크기를 자유롭게 지정할 수 있고, figureBackground로 색상 또한 다양하게 설정할 수 있다. Shape 타입은 figureName 속성으로 지정한다.

#### Properties

> **figureName**  
> Type: string   
> Shape 타입 설정. 

> **figureBackground**  
> Type: color  
> 도형 등의 배경색을 지정.

> **iconLocation**  
> Type: string  
> Default: "left"  
> Shape를 표시할 위치. 

> **iconPadding**  
> Type: Number    
> Shape와 텍스트 사이의 간격.

> **showTooltip**  
> Type: boolean  
> Default: false  
> 셀 데이터 값을 툴팁으로 표시해준다.   

#### Examples 

<pre class="prettyprint">
{
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "130",
    "renderer": {
        "type": "shape"
    },
    "dynamicStyles": [{
        "criteria": "(value = 'WARTH') or (value = 'HILAA')",
        "styles": {
            "figureBackground": "#ff0000ff",
            "figureName": "diamond"
        }
    }, {
        "criteria": "value = 'VINET'",
        "styles": "figureBackground=#ffffcc00;figureName=plus"
    }, {
        "criteria": "value = 'TOMSP'",
        "styles": "figureBackground=#ffcccc00;figureName=ellipse"
    }, {
        "criteria": "value = 'HANAR'",
        "styles": {
            "figureBackground": "#ff008800",
            "figureName": "minus",
            "iconLocation": "right",
            "paddingRight": 6
        }
    }, {
        "criteria": "value = 'HUNGO'",
        "styles": "figureBackground=#ff2ffc2f;figureBorder=#ffaaaaaa;figureName=equal"
    }, {
        "criteria": "value = 'SUPRD'",
        "styles": "figureBackground=#ffff44f5;figureName=rectangle"
    }],
    "styles": {
        "textAlignment": "center",
        "figureName": "null",
        "figureSize": 12,
        "paddingLeft": 6
    },
    "header": {
        "text": "ShapeCellRenderer",
        "styles": {
            "background": "linear,#22ffd500,#ffffd500,90"
        }
    }
} 
</pre>


#### Demo Links

* [ShapeCellRenderer](http://demo.realgrid.com/Renderer/ShapeCellRenderer/){:target="_blank"}