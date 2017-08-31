---
layout: apipost
title: ImageButtonsCellRenderer
part: Types
typename: Cell Renderers
order: ImageButtonsCellRenderer
objectname: 
directiontype: 
jsonly: true
versions:
  - JS 1.1.25+
permalink: /api/types/ImageButtonsCellRenderer/
tags:
  - ImageButtonsCellRenderer
  - Renderer
  - 이미지버튼셀렌더러
  - 이미지버튼
  - 렌더러  
---

#### Description

ImageButtons 셀 렌더러는 하나의 셀안에 여러개의 이미지 버튼을 표시하는 렌더러이다. 

#### Properties

> **id**  
> Type: String   
> Default:     
> 이미지 버튼들의 식별자를 지정한다.      

> **images**  
> Type: Array Of [Image](/api/types/Image/)   
> Default:     
> 이미지 버튼의 객체들을 지정한다.        

> **margin**  
> Type: Number   
> Default:     
> 이미지 버튼과 오른쪽 셀 라인간의 마진값을 지정한다.    

> **imageGap**  
> Type: Number    
> Default:      
> 버튼이 여러개 있는 경우 이미지 간 공백을 지정한다.     

#### Examples   

아래의 코드는 값에 따라 동적으로 표시할 버튼을 다르게 나타내는 예이다.

<pre class="prettyprint">
var imageButtons = [ {
    name:"팝업",
    up:"./image/popup_normal.png",
    hover:"./image/popup_hover.png",
    down:"./image/popup_click.png",
    width:45
},{
    name:"조회",
    up:"./image/search_normal.png",
    hover:"./image/search_hover.png",
    down:"./image/search_click.png",
    width:45
}];

var imageButtons2 = [ {
    name:"zoomin",
    up:"./image/zoomin.png",
    width:16
},{
    name:"zoomout",
    up:"./image/zoomout.png",
    width:16
}];

var imageButtons3 = [ {
    name:"zoomin",
    up:"./image/zoomin.png",
    width:16
},{
    name:"search",
    up:"./image/search_normal.png",
    hover:"./image/search_hover.png",
    down:"./image/search_click.png",
    width:45,
},
{
    name:"zoomout",
    up:"./image/zoomout.png",
    width:16
}];

gridView.addCellRenderers([
    {
        "id":"buttons1",
        "type":"imageButtons",
        "images": imageButtons,
        "imageGap": 60,
        "margin": 40
    }, {
        "id":"buttons2",
        "type":"imageButtons",
        "images": imageButtons2
    }, {
        "id":"buttons3",
        "type":"imageButtons",
        "images": imageButtons3
    }
]);

var columns = [{
    "name": "buttonColumn",
    "fieldName": "buttonColumn",
    "buttonVisibility": "always",
    "dynamicStyles": [{
        "criteria": 
            ["value = 'A'", "value = 'B'", "state = 'u'"],
        "styles": 
            ["renderer=buttons1", "renderer=buttons2", "renderer=buttons3"]
    }]
}]
gridView.setColumns(columns);
</pre>

---

#### Demo Links


