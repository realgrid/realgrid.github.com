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

> **alignment**  
> Type: String   
> Default: "far"    
> 셀 안의 버튼의 위치를 지정한다. "near", "center" 지정시 셀의 값이 표시되지 않는다.     
> JS 1.1.26 이상부터 지원한다.        

> **lineAlignment**  
> Type: String   
> Default: "center"   
> 셀 안의 버튼의 상중하 위치를 지정한다. "near", "center", "far"를 지정할 수 있다.       
> JS 1.1.27 이상부터 지원한다.     

> **width**  
> Type: Number   
> Default: 0    
> 이미지 버튼들이 표시되는 영역의 너비를 지정한다.       
> JS 1.1.27 이상부터 지원한다.    

> **height**  
> Type: Number   
> Default: 0    
> 개별이미지들의 높이가 다른상태에서 lineAlignment를 Far, Near로 주는 경우 이미지를 정렬하기위한 높이이다. 또한 height가 추가되는 경우 버튼의 아래위를 클릭해도 버튼 클릭이 발생하지 않는다.         
> JS 1.1.27 이상부터 지원한다.    

> **showText**  
> Type: Boolean   
> Default: false    
> alignment가 near일때 text 표시 여부를 지정한다. (near일때는 표시하지않고 far일때만 표시한다.)      
> JS 1.1.27 이상부터 지원한다.      


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


