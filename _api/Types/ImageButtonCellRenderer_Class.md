---
layout: apipost
title: ImageButtonCellRenderer
part: Types
typename: Cell Renderers
order: ImageButtonCellRenderer
objectname: 
directiontype: 
permalink: /api/types/ImageButtonCellRenderer/
jsonly: true
versions:
  - JS 1.1.23+
tags:
    - 렌더러랜더러
---

#### Description

이미지 위에 텍스트를 지정할 수 있는 렌더러이다. 공통된 이미지 위에 텍스트만 바뀌는 경우 사용한다.  
하나의 셀에 하나의 이미지 버튼만 올릴 수 있다.  


#### Properties

> **imageUrl**  
> Type: String   
> Default: null   
> 기본 이미지 경로를 지정한다.  

> **hoverUrl**  
> Type: String  
> Default: null  
> 호버링시 표시될 이미지 경로를 지정한다.    

> **activeUrl**  
> Type: String  
> Default: null  
> 클릭되었을때 표시될 이미지 경로를 지정한다.    

> **text**  
> Type: String  
> Default: "Click"    
> 이미지 위에 표시될 텍스트를 지정한다.   
> null을 지정하면 셀 값이 표시된다.   

> **hoveredUnderline**  
> Type: boolean   
> Default: true     
> false로 지정하면 마우스 호버시 밑줄이 생기지 않는다.  
> RealGridJS 1.1.29 이상부터 지원한다.   

> **cursor**  
> Type: String   
> Default: null  
> 버튼에 마우스 커서가 위치할때 표시될 마우스 커서의 모양을 지정한다.  
> 지정할 수 있는 값은 W3C 표준([http://www.w3.org/wiki/CSS/Properties/cursor](http://www.w3.org/wiki/CSS/Properties/cursor)) 을 준수한다. uri 미지원    
> RealGridJS 1.1.29 이상부터 지원한다.   

#### Examples   

<pre class="prettyprint">

var columns = [{
    "fieldName": "field1",
    "name": "field1",
    "width": 80,
    "renderer": {
        "type": "imageButton",
        "showTooltip": true,
        "text": "가나다",
        "margin": 20,
        "imageUrl": "./button.png",
        "hoverUrl": "./button_hover.png",
        "activeUrl": "./button_active.png"
    },     
    "header": { "text": "Image Button" },
    "styles": { "textAlignment": "center", "font": "Tahoma" }
}];

gridView.setColumns(columns);
</pre>

---

#### Demo Links


